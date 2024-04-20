// UI components
import { Divider } from '@mui/material';
import FiatsContainer from './FiatsContainer';
import InputContainer from './InputContainer';
import { HighlightOffIconSX, PaperSX } from './Styled/Styled';

// Store
import { useGetPairQuery } from '../Store/API/currencyApi';
import { useGetFlagsQuery } from '../Store/API/flagsApi';
import {
    Item,
    changeAmount,
    removeElement,
    updateSelect,
} from '../Store/Slices/selectsSlice';
import { useAppDispatch } from '../Store/store';

interface Props {
    item: Item;
    data: any;
}

export interface IGetProp {
    (currency: string): JSX.Element;
}

export default function CustomSelect({ item, data }: Props) {
    //// spread
    const { from, to }: { from: string; to: string } = item;

    //// get data
    const { data: currencies = [], isFetching: isFlags } = useGetFlagsQuery('');

    const { data: { conversion_rate } = 1, isFetching } = useGetPairQuery({
        from,
        to,
    });

    //// functions
    const getFlag: IGetProp = (currency) => {
        const data = currencies.find(
            ({ id }: { id: string }) => id === currency
        );

        return <img style={imgStyles} src={data.flag} alt={data.symbol} />;
    };

    const getSymbol: IGetProp = (currency: string) => {
        const data = currencies.find(
            ({ id }: { id: string }) => id === currency
        );

        return (
            <div style={{ minWidth: '20px', textAlign: 'center' }}>
                {data.symbol}
            </div>
        );
    };

    //// dispatch
    const dispatch = useAppDispatch();

    const updatingSelect = (side: string, value: string) => {
        dispatch(updateSelect({ side, value, id: item.id }));
    };

    const amountChange = (value: number) => {
        if (!isNaN(value))
            dispatch(changeAmount({ id: item.id, amount: value }));
    };

    const removing = () => {
        dispatch(removeElement({ id: item.id }));
    };

    if (isFlags) {
        return null;
    }

    return (
        <PaperSX elevation={9}>
            <InputContainer
                {...{
                    item,
                    data,
                    amountChange,
                    updatingSelect,
                    getFlag,
                    isFetching,
                    getSymbol,
                }}
            />

            <Divider />

            <FiatsContainer
                {...{
                    item,
                    data,
                    amountChange,
                    updatingSelect,
                    getFlag,
                    isFetching,
                    conversion_rate,
                    getSymbol,
                }}
            />

            <HighlightOffIconSX onClick={removing} />
        </PaperSX>
    );
}

const imgStyles = {
    width: '30px',
    boxShadow: '0px 0px 5px 1px #ccc',
    overflow: 'hidden',
};
