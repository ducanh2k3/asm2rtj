import { useEffect } from "react";

import { getProduct, removeProduct } from "../api/product";
import { Link } from "react-router-dom";
import { Table, Popconfirm, Button } from "antd";
import { useAppDispatch, useAppSelector } from "../store/hook";
const Home = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(
    (state: any) => state.products
  );
  console.log(products);
  const dataSource = products?.map(({ id, name, price }) => ({
    key:id,
    name,
    price,
  }));
  const columns = [
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hành động",
      render: ({ key: id }: any) => {
       
        return (
          <>
            <div className="flex space-x-2">
              <Button type="primary" danger onClick={()=>handleDelete(id)}>
                Xóa
              </Button>

              <Button type="primary" danger>
                <Link to={`/update/${id}`}>Sửa</Link>
              </Button>
            </div>
          </>
        );
      },
    },
  ];
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  const handleDelete = async (id: any) => {
    await dispatch(removeProduct(id));
  };

  if (error) return <div>{error}</div>;
  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default Home;
