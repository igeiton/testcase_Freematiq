// UI components
import { Select, TextField } from '@mui/material';
import { ContainerSX, MenuItemSX, TypographySX } from './Styled/Styled';

// Interfaces
import { Item } from '../Store/Slices/selectsSlice';
import { IGetProp } from './Select';

interface Props {
    item: Item;
    data: any;
    amountChange: (value: number) => void;
    updatingSelect: (currency: string, value: string) => any;
    getFlag: IGetProp;
    isFetching: boolean;
    getSymbol: IGetProp;
}

export default function InputContainer({
    item,
    data,
    amountChange,
    updatingSelect,
    getFlag,
    isFetching,
    getSymbol,
}: Props) {
    //// spread
    const { from, amount } = item;

    return (
        <ContainerSX>
            <TextField
                label={getSymbol(from)}
                type="text"
                value={isFetching ? 'counting...' : amount * 1}
                onChange={(e: any) => amountChange(e.target.value)}
            />

            <Select
                sx={{ flex: '1 1 40%', display: 'flex' }}
                value={from}
                onChange={(e: any) => updatingSelect('from', e.target.value)}
            >
                {data.map((currency: any) => (
                    <MenuItemSX key={currency} value={currency}>
                        <TypographySX>
                            {currency} {getFlag(currency)}
                        </TypographySX>
                    </MenuItemSX>
                ))}
            </Select>
        </ContainerSX>
    );
}
