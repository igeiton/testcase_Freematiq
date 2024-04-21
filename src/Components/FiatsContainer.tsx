// UI components
import { Select, Skeleton, TextField } from '@mui/material';
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
            {isFetching ? (
                <Skeleton
                    component={'div'}
                    variant="text"
                    animation="wave"
                    sx={{ height: 50, flex: '1 1 60%' }}
                />
            ) : (
                <TextField
                    sx={{ height: 50, flex: '1 1 60%' }}
                    variant="standard"
                    label={getSymbol(to)}
                    type="number"
                    value={Number(
                        (amount * conversion_rate).toFixed(10)
                    ).toString()}
                    onChange={(e: any) => {
                        amountChange(e.target.value / conversion_rate);
                    }}
                />
            )}

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
