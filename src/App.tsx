// UI components
import { Button, Container, styled } from '@mui/material';
import Select from './Components/Select';

// Redux Toolkit
import { useGetAllCurrencyQuery } from './Store/API/flagsApi';
import { Item, Selects, addSelect } from './Store/Slices/selectsSlice';
import { useAppDispatch, useAppSelector } from './Store/store';

function App() {
    //// get data
    const { data: [currencies] = [], isFetching } = useGetAllCurrencyQuery('');

    //// spread
    const { selects }: Selects = useAppSelector((state) => state.selects);

    //// dispatch
    const dispatch = useAppDispatch();

    const handleAdd = () => {
        dispatch(
            addSelect({
                id: new Date().getTime(),
                from: 'USD',
                to: 'USD',
                amount: 1,
            } as Item)
        );
    };

    if (isFetching) {
        return null;
    }

    return (
        <ContainerSX>
            {selects.map((item: Item) => (
                <Select
                    key={item.id}
                    item={item}
                    data={Object.keys(currencies)}
                />
            ))}

            <Button variant="contained" onClick={handleAdd}>
                Add select
            </Button>
        </ContainerSX>
    );
}

export default App;

const ContainerSX = styled(Container)({
    maxWidth: '500px',
    display: 'flex',
    flexDirection: 'column',
    gap: 25,
    marginTop: 50,
});
