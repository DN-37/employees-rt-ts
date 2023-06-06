import { Layout } from "../../components/layout";
import React from 'react';
import { Card, Form, Row } from "antd";
import { CustomInput } from "../../components/custom-input";

export const Login = () => {
    return (
        <Layout>
            <Row align="middle" justify="center">
                <Card title="Войдите" style={{ width: "30rem" }}>
                    <Form onFinish={() => null}>
                        <CustomInput type="email" name="email" placeholder="Email" />
                    </Form>
                </Card>
            </Row>
        </Layout>
    )
}