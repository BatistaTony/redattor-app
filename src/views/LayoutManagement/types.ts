export type Layout = {
  id: string;
  icon: string;
  title: string;
  description: string;
};

export interface ListOfLayoutsProps {
  loading: boolean;
  layouts: Array<Layout>;
}
