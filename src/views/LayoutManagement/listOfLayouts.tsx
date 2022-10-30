import { Box } from '@mui/material';
import { FC } from 'react';
import { ListOfLayoutsProps } from './types';
import LayoutCard from './LayoutCard';
import LayoutCardSkeleton from './LayoutCard/Skeleton';

const ListOfLayouts: FC<ListOfLayoutsProps> = ({ loading, layouts }) => {
  if (loading) {
    return (
      <Box>
        {[0, 1, 2].map(item => (
          <LayoutCardSkeleton key={item} />
        ))}
      </Box>
    );
  }

  return (
    <Box>
      {layouts.map(layout => (
        <LayoutCard key={layout.id} {...layout} />
      ))}
    </Box>
  );
};

export default ListOfLayouts;
