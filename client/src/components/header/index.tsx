import {
    TeamOutlined,
    LoginOutlined,
    LogoutOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { CustomButton } from "../custom-button";
import style from "./index.module.css";

export const Header = () => {

    return (
        <Layout.Header className={style.header}>
            <Space>
                <TeamOutlined className={style.teamIcon} />
                <CustomButton>
                </CustomButton>
            </Space>
        </Layout.Header>
    );
};