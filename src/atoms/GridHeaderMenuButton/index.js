import MenuButton from "monday-ui-react-core/dist/MenuButton";
import Menu from "monday-ui-react-core/dist/Menu";
import MenuItem from "monday-ui-react-core/dist/MenuItem";
import DropdownChevronDown from "monday-ui-react-core/dist/icons/DropdownChevronDown";
import styled from "styled-components";

const StyledGridHeaderMenuButton = styled.span`
  // display: none;
`;

export default function GridHeaderMenuButton({
  menuItemTitles = ["A", "B", "C"],
  dialogPosition = MenuButton.dialogPositions.BOTTOM_END,
  menuIconSize = Menu.sizes.MEDIUM,
  menuButtonIcon = DropdownChevronDown,
}) {
  return (
    <StyledGridHeaderMenuButton>
      <MenuButton
        dialogPosition={dialogPosition}
        component={menuButtonIcon}
      >
        <Menu
          id="menu"
          size={menuIconSize}
        >
          {menuItemTitles.map((title) => {
            return <MenuItem title={title} />;
          })}
        </Menu>
      </MenuButton>
    </StyledGridHeaderMenuButton>
  );
}
