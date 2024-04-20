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
    conversion_rate: number;
    getSymbol: IGetProp;
}

export default function FiatsContainer({
    item,
    data,
    updatingSelect,
    getFlag,
    isFetching,
    conversion_rate,
    amountChange,
    getSymbol,
}: Props) {
    //// spread
    const { to, amount } = item;

    return (
        <ContainerSX>
            <TextField
                label={getSymbol(to)}
                type="text"
                value={isFetching ? 'counting...' : amount * conversion_rate}
                onChange={(e: any) =>
                    amountChange(e.target.value / conversion_rate)
                }
            />

            <Select
                sx={{ flex: '1 1 40%' }}
                value={to}
                onChange={(e: any) => updatingSelect('to', e.target.value)}
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
