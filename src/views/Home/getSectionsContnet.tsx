/* eslint-disable import/prefer-default-export */
import { paths } from '@utils/paths';
import DashboardDemo from '@views/DashboardDemo';
import LayoutManagement from '@views/LayoutManagement';
import Settings from '@views/Settings';
import UserManagement from '@views/Users';

export const SectionsContent = ({
  path,
  title,
}: {
  path: string;
  title: string;
}) => {
  switch (path) {
    case paths.DASHBOARD:
      return <DashboardDemo title={title} />;
    case paths.CHANGE_RECORD:
      return <DashboardDemo title={title} />;
    case paths.LAYOUT:
      return <LayoutManagement />;
    case paths.REPORTS:
      return <DashboardDemo title={title} />;
    case paths.USERS:
      return <UserManagement title={title} />;
    case paths.SETTINGS:
      return <Settings />;
    default:
      return <div>ooo</div>;
  }
};
