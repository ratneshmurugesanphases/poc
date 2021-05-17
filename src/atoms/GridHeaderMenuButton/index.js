import { forwardRef } from "react";
import MenuButton from "monday-ui-react-core/dist/MenuButton";
import Menu from "monday-ui-react-core/dist/Menu";
import MenuItem from "monday-ui-react-core/dist/MenuItem";
import DropdownChevronDown from "monday-ui-react-core/dist/icons/DropdownChevronDown";
import styled from "styled-components";

const StyledGridHeaderMenuButton = styled.span`
  // display: none;
`;

const GridHeaderMenuButton = forwardRef(
  (
    {
      menuItemTitles = ["A", "B", "C"],
      dialogPosition = MenuButton.dialogPositions.BOTTOM_END,
      menuIconSize = Menu.sizes.MEDIUM,
      menuButtonIcon = DropdownChevronDown,
    },
    forwardedRef
  ) => {
    return (
      <StyledGridHeaderMenuButton>
        <MenuButton
          dialogPosition={dialogPosition}
          component={menuButtonIcon}
          ref={forwardedRef}
        >
          <Menu id="menu" size={menuIconSize}>
            {menuItemTitles.map((title) => {
              return <MenuItem title={title} />;
            })}
          </Menu>
        </MenuButton>
      </StyledGridHeaderMenuButton>
    );
  }
);

export default GridHeaderMenuButton;
