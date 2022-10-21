/* eslint-disable import/prefer-default-export */
import { paths } from '@utils/paths';
import Dashboard from '@views/Dashboard';

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
      return <Dashboard title={title} />;
    case paths.LAYOUT:
      return <Dashboard title={title} />;
    case paths.REPORTS:
      return <Dashboard title={title} />;
    case paths.USERS:
      return <Dashboard title={title} />;
    case paths.SETTINGS:
      return <Dashboard title={title} />;
    default:
      return <div>ooo</div>;
  }
};
