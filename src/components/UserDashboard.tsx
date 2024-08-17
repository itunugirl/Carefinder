// src/components/UserDashboard.tsx
import { useAuth } from '@contexts/AuthContext';

const UserDashboard = () => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated || userRole !== 'user') {
    return <p>You do not have access to this page.</p>;
  }

  return (
    <div>
      <h1>User Dashboard</h1>
      <p>View and interact with content, and manage your personal settings here.</p>
      {/* User-specific features */}
    </div>
  );
};

export default UserDashboard;
