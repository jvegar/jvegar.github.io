import NodeIcon from "../assets/img/stack/icon-nodejs.svg";
import JavaScriptIcon from "../assets/img/stack/icon-javascript.svg";
import TypeScriptIcon from "../assets/img/stack/icon-typescript.svg";
import ReactIcon from "../assets/img/stack/icon-react.svg";
import PostgreSQLIcon from "../assets/img/stack/icon-postgres.svg";
import AWSIcon from "../assets/img/stack/icon-aws.svg";
import DockerIcon from "../assets/img/stack/icon-docker.svg";
import JavaIcon from "../assets/img/stack/icon-java.svg";

export interface StackItem {
  name: string;
  url: string;
  icon: string;
}

export const stackData: StackItem[] = [
  {
    icon: NodeIcon,
    name: "Node.js",
    url: "https://nodejs.org/",
  },
  {
    icon: JavaScriptIcon,
    name: "JavaScript",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    icon: TypeScriptIcon,
    name: "TypeScript",
    url: "https://www.typescriptlang.org/",
  },
  {
    icon: ReactIcon,
    name: "React",
    url: "https://reactjs.org/",
  },
  {
    icon: PostgreSQLIcon,
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
  },
  {
    icon: AWSIcon,
    name: "AWS",
    url: "https://aws.amazon.com/",
  },
  {
    icon: DockerIcon,
    name: "Docker",
    url: "https://www.docker.com/",
  },
  {
    icon: JavaIcon,
    name: "Java",
    url: "https://www.java.com/",
  },
];
