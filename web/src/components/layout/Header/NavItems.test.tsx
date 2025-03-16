import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import NavItems from './NavItems';
import styles from './Header.module.css';

// Mock scrollIntoView
Element.prototype.scrollIntoView = vi.fn();

describe('NavItems', () => {
  const mockOnLinkClick = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderNavItems = (activeLink = '', initialPath = '/') => {
    return render(
      <MemoryRouter initialEntries={[initialPath]}>
        <NavItems activeLink={activeLink} onLinkClick={mockOnLinkClick} />
      </MemoryRouter>
    );
  };

  it('renders all navigation items', () => {
    renderNavItems();
    
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About me')).toBeInTheDocument();
    expect(screen.getByText('Resume')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
    expect(screen.getByText('My Platform')).toBeInTheDocument();
  });

  it('applies active class to the active link', () => {
    renderNavItems('#home-section');
    
    const homeLink = screen.getByText('Home').closest('a');
    const aboutLink = screen.getByText('About me').closest('a');
    
    expect(homeLink).toHaveClass(styles.headerNavLinkActive);
    expect(aboutLink).not.toHaveClass(styles.headerNavLinkActive);
  });

  it('calls onLinkClick when a link is clicked', async () => {
    const user = userEvent.setup();
    renderNavItems();
    
    await user.click(screen.getByText('Home'));
    
    expect(mockOnLinkClick).toHaveBeenCalledWith('#home-section');
  });

  it('renders My Platform link with correct route', () => {
    renderNavItems();
    
    const platformLink = screen.getByText('My Platform').closest('a');
    expect(platformLink).toHaveAttribute('href', '/platform');
  });

  it('scrolls to section when hash is present in URL', () => {
    // Create a mock section
    const mockSection = document.createElement('div');
    mockSection.id = 'about-section';
    document.body.appendChild(mockSection);

    renderNavItems('', '/#about-section');

    expect(mockSection.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    document.body.removeChild(mockSection);
  });

  it('handles missing section gracefully', () => {
    renderNavItems('', '/#nonexistent-section');
    // Test passes if no error is thrown
    expect(true).toBe(true);
  });
});
