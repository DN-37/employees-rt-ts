import React from "react";
import { Form, Button } from "antd";

type Props = {
    children: React.ReactNode;
    htmlType?: "button" | "submit" | "reset" | undefined;
}

export const CustomButton = ({ children, htmlType }: Props) => {
    return (
        <Form.Item>
            <Button
                htmlType={htmlType}>
                {children}
            </Button>
        </Form.Item>
    );
}