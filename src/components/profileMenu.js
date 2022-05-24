import { useState } from 'react';
import styled from 'styled-components';
import MenuUnstyled from '@mui/base/MenuUnstyled';
import MenuItemUnstyled from '@mui/base/MenuItemUnstyled';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import Separator from './separator';
import {ReactComponent as ProfileIcon} from '../images/profile.svg';
import {ReactComponent as SettingsIcon} from '../images/settings.svg';
import useAuth from '../context/useAuth';

const MenuContainer = styled.div`
    position: absolute;
    top: 15px;
    right: -50px;
    padding: 0px;
    background-color: #ffffff;
    border-radius: 6px;
    z-index: 3;
    box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
    &::after {
        position: absolute;
        height: 12px;
        width: 12px;
        top: -6px;
        left: 184px;
        z-index: -1;
        background-color: #ffffff;
        border: 1px solid #ffffff;
        box-shadow: 0 0 5px 1px rgb(0 0 0 / 10%);
        transform: rotate(45deg);
        content: "";
    }
`
const Menu = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    border-radius: 6px;
    overflow-x: hidden;
    overflow-y: hidden;
`
const MenuItem = styled.li`
    display: flex;
    align-items: center;
    background-color: #ffffff;
    width: 230px;
    height: 37px;
    padding: 8px 16px;
    :hover {
        background-color: #fafafa;
    }
`
const ClickArea = styled.div`
    display: inline-block;
    position: relative;
`
const ChildContainer = styled.button`
    display: block;
`
const Label = styled.div`
    font-size: 14px;
    line-height: 18px;
`
const Icon = styled.div`
    margin-right: 12px;
`

const ProfileMenu = ({children}) => {
    const auth = useAuth();
    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = e => {
        if(isOpen) {
            setAnchorEl(null);
        } else {
            setAnchorEl(e.currentTarget);
        }
    }

    const handleClickAway = () => {
        if(isOpen) {
            setAnchorEl(null);
        }
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <ClickArea>
                <ChildContainer onClick={handleClick}>
                    {children}
                </ChildContainer>
                <MenuUnstyled anchorEl={anchorEl} components={{Listbox: MenuContainer}} open={isOpen}>
                    <Menu>
                        <MenuItemUnstyled component={MenuItem}>
                            <Icon>
                                <ProfileIcon/>
                            </Icon>
                            <Label>Profile</Label>
                        </MenuItemUnstyled>
                        <MenuItemUnstyled component={MenuItem}>
                            <Icon>
                                <SettingsIcon/>
                            </Icon>
                            <Label>Settings</Label>
                        </MenuItemUnstyled>
                        <Separator/>
                        <MenuItemUnstyled component={MenuItem} onClick={auth.signout}>
                            <Label>
                                Log Out
                            </Label>
                        </MenuItemUnstyled>
                    </Menu>
                </MenuUnstyled>
            </ClickArea>
        </ClickAwayListener>
    );
}

export default ProfileMenu;