import { Navigate } from "react-router-dom";

export const Landing = () => <h1>Lading Page (Public)</h1>;

export const Home = () => <h1>Home Page (Private)</h1>;

export const Dashboard = () => <h1>Dashboard Page (Private)</h1>;

export const Analytics = () => (
  <h1>Analytics (Private, permission: "analize")</h1>
);

export const Admin = () => <h1>Admin Page (Private, permission: "admin")</h1>;
