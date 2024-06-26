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
            {isFetching ? (
                <Skeleton
                    component={'div'}
                    variant="text"
                    animation="wave"
                    sx={{ height: 50, flex: '1 1 60%' }}
                />
            ) : (
                <TextField
                    sx={{ flex: '1 1 60%', height: '100%' }}
                    variant="standard"
                    label={getSymbol(from)}
                    type="number"
                    value={Number(amount.toFixed(10)).toString()}
                    onChange={(e: any) => amountChange(e.target.value)}
                />
            )}

            <Select
                sx={{ flex: '0 1 40%', display: 'flex' }}
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
