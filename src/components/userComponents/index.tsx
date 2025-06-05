import { getAllUsers } from "@/service/asyncStore/action/user";
import { UserDataType } from "@/types/userTypes";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import UserCard from "./UserCard";

const UserMain = () => {
  const [userData, setUserData] = useState<UserDataType[]>([]);
  const [selected, setSelected] = useState<{ [key: string]: boolean }>({});
 
  useEffect(() => {
    getAllUsers().then((res) => {
      if (res.success) {
        const ids = res.data.reduce((acc: any, d: UserDataType) => {
          return { ...acc, [d._id]: false };
        }, {});
        setSelected(ids);
        setUserData(res.data);
      }
    });
  }, []);

  const onSelect = (id: string) => {
    setSelected((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section>
      <Row>
        {userData.map((user) => (
          <Col xl={3} xxl={2} className="mb-4">
            <UserCard
              user={user}
              isSelected={selected[user._id] || false}
              onSelect={onSelect}
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default UserMain;
