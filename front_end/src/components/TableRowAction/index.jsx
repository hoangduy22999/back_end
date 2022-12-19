import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popconfirm } from 'antd';
const TableRowAction = ({
  onDelete,
  onEdit,
  record,
  confirmLoading,
  style,
  isAllowDelete = true,
}) => {
  const getDepend = () => {
    return document.querySelector(`#pop-confirm-${record.id}`);
  };

  return (
    <div
      className='table-row-action'
      id={`pop-confirm-${record.id}`}
      style={{ position: 'relative', ...style }}
    >
      <FontAwesomeIcon icon={faPenToSquare} onClick={onEdit(record)} className='img-row' />
      {isAllowDelete && (
        <Popconfirm
          title='Are you sure you want to delete this record'
          onConfirm={onDelete(record)}
          okText='OK'
          cancelText='Cancle'
          okButtonProps={{ loading: confirmLoading }}
          getPopupContainer={getDepend}
        >
          <FontAwesomeIcon icon={faTrashCan} className='img-row' />
        </Popconfirm>
      )}
    </div>
  );
};

export default TableRowAction;
