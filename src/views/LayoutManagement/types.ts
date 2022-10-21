export type Layout = {
  id: string;
  icon: any;
  title: string;
  description: string;
};

export interface ListOfLayoutsProps {
  loading: boolean;
  layouts: Array<Layout>;
}
