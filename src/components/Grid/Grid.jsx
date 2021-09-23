import React from "react";
import { Item } from "../Item/Item";
import { StyledGrid } from "./StyledGrid";

export const Grid = (props) => {
    return (
        <StyledGrid>
            {
                props.items.map(item => {
                    return <Item key={item}
                                item={item}
                                func={props.func} />;
                })
            }
        </StyledGrid>
    );
}