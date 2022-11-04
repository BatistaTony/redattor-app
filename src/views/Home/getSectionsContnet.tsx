/* eslint-disable import/prefer-default-export */
import { paths } from '@utils/paths';
import LayoutManagement from '@views/LayoutManagement';
import Settings from '@views/Settings';
import UserManagement from '@views/Users';
import Dashboard from '@views/Dashboard';
import ActivitiesLogs from '@views/ActivitiesLogs';

export const SectionsContent = ({
  path,
  title,
}: {
  path: string;
  title: string;
}) => {
  switch (path) {
    case paths.DASHBOARD:
      return <Dashboard title={title} />;
    case paths.CHANGE_RECORD:
      return <ActivitiesLogs title={title} />;
    case paths.LAYOUT:
      return <LayoutManagement />;
    case paths.REPORTS:
      return <Dashboard title={title} />;
    case paths.USERS:
      return <UserManagement title={title} />;
    case paths.SETTINGS:
      return <Settings />;
    default:
      return <div>ooo</div>;
  }
};
