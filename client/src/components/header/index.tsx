import {
    TeamOutlined,
    LoginOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Layout, Space, Typography } from "antd";
import { Link } from "react-router-dom";
import { CustomButton } from "../custom-button";
import style from "./index.module.css";
import { Paths } from "../../paths";

export const Header = () => {

    return (
        <Layout.Header className={style.header}>
            <Space>
                <TeamOutlined className={style.teamIcon} />
                <Link to={Paths.home}>
                    <CustomButton type="ghost">
                        <Typography.Title level={1}>Сотрудники</Typography.Title>
                    </CustomButton>
                </Link>
            </Space>
            <Space>
                <Link to={Paths.register}>
                    <CustomButton type="ghost" icon={<UserOutlined />}>
                        Зарегистрироваться
                    </CustomButton>
                </Link>
                <Link to={Paths.login}>
                    <CustomButton type="ghost" icon={<LoginOutlined />}>
                        Войти
                    </CustomButton>
                </Link>
            </Space>
        </Layout.Header>
    );
};