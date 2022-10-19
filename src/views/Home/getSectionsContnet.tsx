/* eslint-disable import/prefer-default-export */
import { paths } from '@utils/paths';
import DashboardDemo from '@views/DashboardDemo';

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
      return <DashboardDemo title={title} />;
    case paths.REPORTS:
      return <DashboardDemo title={title} />;
    case paths.USERS:
      return <DashboardDemo title={title} />;
    case paths.SETTINGS:
      return <DashboardDemo title={title} />;
    default:
      return <div>ooo</div>;
  }
};
