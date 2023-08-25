import { List, Datagrid, TextField, ReferenceField, EditButton } from "react-admin";

export const PostList = () => (
    <List>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users" link="show" />
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);
