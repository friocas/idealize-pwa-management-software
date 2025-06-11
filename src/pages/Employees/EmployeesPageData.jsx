import { Pencil, Trash, Eye } from 'react-bootstrap-icons';

export const tableConfig = {
  columns: [
    { key: 'id', label: 'ID', type: 'int' },
    { key: 'title', label: 'Produto', type: 'string' },
    { key: 'brand', label: 'Marca', type: 'string' },
    { key: 'category', label: 'Categoria', type: 'string' },
    { key: 'price', label: 'Preço ($)', type: 'currency' },
    { key: 'stock', label: 'Inventário', type: 'int' },
    { key: 'availabilityStatus', label: 'Estado de Estoque', type: 'status' },
    { key: 'rating', label: 'Avaliação', type: 'float' }
  ],
  actions: [
    {
      label: <Eye />,
      variant: 'secondary',
      onClick: (item) => alert(`Visualizar: ${item.title}`),
    },
    {
      label: <Pencil />,
      variant: 'light',
      onClick: (item) => alert(`Editar: ${item.title}`),
    },
    {
      label: <Trash />,
      variant: 'danger',
      onClick: (item) => alert(`Excluir: ${item.title}`),
    }
  ],
  filters: [
    {
      type: 'search',
      key: 'title',
      placeholder: 'Pesquisar por produto...',
    }
  ],
};
