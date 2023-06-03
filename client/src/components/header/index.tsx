import {
    TeamOutlined
} from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { CustomButton } from "../custom-button";
import style from "./index.module.css";

export const Header = () => {

    return (
        <Layout.Header className={style.header}>
            <Space>
                <TeamOutlined className={style.teamIcon} />
                <Link to="/">
                    <CustomButton type="ghost">
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    );
};