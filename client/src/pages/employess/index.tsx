import React from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { PlusCircleOutlined } from '@ant-design/icons';
import { CustomButton } from "../../components/custom-button";
import { Employee } from "@prisma/client";
import { useGetAllEmployeesQuery } from "../../app/services/employees";
import { Layout } from "../../components/layout";

const columns: ColumnsType<Employee> = [
    {
        title: "Имя",
        dataIndex: "firstName",
        key: "firstName",
    },
    {
        title: "Возраст",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Адрес",
        dataIndex: "address",
        key: "address",
    },
];

export const Employees = () => {
    const { data, isLoading } = useGetAllEmployeesQuery();

    return (
        <Layout>
            <CustomButton type="primary" onClick={() => null} icon={<PlusCircleOutlined />}>
                Добавить
            </CustomButton>
            <Table
                loading={isLoading}
                rowKey={(record) => record.id}
                columns={columns}
                dataSource={data}
                pagination={false}
            />
        </Layout>
    );
};