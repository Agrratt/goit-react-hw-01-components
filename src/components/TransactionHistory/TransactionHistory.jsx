import PropTypes from 'prop-types';
import { Card, TableHeader, TableBody, Type } from 'components/TransactionHistory/TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <Card className="transaction-history">
            <TableHeader>
                <tr>
                <th>Type</th>``
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </TableHeader>

            {items.map(({ id, type, amount, currency }) => (
                <TableBody key={id}>
                    <tr>
                    <Type>{type}</Type>
                    <td>{amount}</td>
                    <td>{currency}</td>
                    </tr>

                </TableBody>
            ))}
        </Card>
    );

};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    }))
};


export default TransactionHistory;