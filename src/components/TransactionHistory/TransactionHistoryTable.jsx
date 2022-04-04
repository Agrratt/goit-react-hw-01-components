import PropTypes from 'prop-types';
import { TableBody, Type } from 'components/TransactionHistory/TransactionHistory.styled';

const TransactionHistoryTable = ({ type, amount, currency }) => {
    return (
        <TableBody>
            <tr>
            <Type>{type}</Type>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>

        </TableBody>
    )
};

TransactionHistoryTable.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};

export default TransactionHistoryTable;

