import TransactionHistoryTable from 'components/TransactionHistory/TransactionHistoryTable';
import PropTypes from 'prop-types';
import { Card, TableHeader } from 'components/TransactionHistory/TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <Card className="transaction-history">
            <TableHeader>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </TableHeader>
            {items.map(({ id, type, amount, currency }) => (
                <TransactionHistoryTable
                    key={id}
                    type={type}
                    amount={amount}
                    currency={currency}
                />
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