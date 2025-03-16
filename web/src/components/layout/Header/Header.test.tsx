import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import Header from './Header';
import styles from './Header.module.css';

// Mock window.scrollTo
const scrollToMock = vi.fn();
window.scrollTo = scrollToMock;

// Mock timers
vi.useFakeTimers();

// Mock react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useLocation: vi.fn().mockReturnValue({
      pathname: '/',
      hash: '',
      search: '',
      state: null,
      key: 'default'
    })
  };
});

// Mock the scroll position hook
vi.mock('./useScrollPosition', () => ({
  useScrollPosition: vi.fn().mockReturnValue(false)
}));

// Mock the scroll spy context
vi.mock('./scrollSpyContext', () => ({
  useScrollSpyContext: () => ({
    activeSection: 'home-section'
  })
}));

describe('Header', () => {
  const renderHeader = () => {
    return render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  };

  beforeEach(() => {
    // Reset mocks before each test
    vi.clearAllMocks();
    scrollToMock.mockClear();
    // Reset scroll position
    window.scrollY = 0;
  });

  it('renders the brand name correctly', () => {
    renderHeader();
    
    expect(screen.getByText('J')).toBeInTheDocument();
    expect(screen.getByText('ose Eduardo')).toBeInTheDocument();
  });

  it('toggles navigation menu on mobile button click', () => {
    renderHeader();
    
    const toggleButton = screen.getByLabelText('Toggle navigation');
    const nav = document.getElementById('header-nav');
    
    expect(nav).not.toHaveClass(styles.show);
    
    fireEvent.click(toggleButton);
    expect(nav).toHaveClass(styles.show);
    
    fireEvent.click(toggleButton);
    expect(nav).not.toHaveClass(styles.show);
  });

  it('applies scrolled class when scrolled', () => {
    // Mock scrolled state
    vi.mock('./useScrollPosition', () => ({
      useScrollPosition: vi.fn().mockReturnValue(true)
    }));
    
    renderHeader();
    const header = document.getElementById('header');
    expect(header).toHaveClass(styles.headerScrolled);
  });

  it('applies platform class on platform route', () => {
    // Mock useLocation for platform route
    vi.mocked(useLocation).mockReturnValue({
      pathname: '/platform',
      hash: '',
      search: '',
      state: null,
      key: 'platform'
    });

    renderHeader();
    const header = document.getElementById('header');
    expect(header).toHaveClass(styles.headerPlatform);
  });

  it('adjusts scroll position after navigation on non-platform routes', async () => {
    // Mock useLocation for home route
    vi.mocked(useLocation).mockReturnValue({
      pathname: '/',
      hash: '',
      search: '',
      state: null,
      key: 'home'
    });

    renderHeader();
    
    // Mock header height
    const mockHeader = document.createElement('div');
    mockHeader.id = 'header';
    Object.defineProperty(mockHeader, 'offsetHeight', { value: 80 });
    document.body.appendChild(mockHeader);
    
    // Mock window.scrollY
    const originalScrollY = window.scrollY;
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: 100
    });
    
    // Simulate navigation click
    const homeLink = screen.getByText('Home').closest('a');
    fireEvent.click(homeLink!);
    
    // Wait for the setTimeout
    vi.runAllTimers();
    
    expect(scrollToMock).toHaveBeenCalledWith({
      top: 100,
      behavior: 'smooth'
    });
    
    // Cleanup
    document.body.removeChild(mockHeader);
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      value: originalScrollY
    });
  });
});
