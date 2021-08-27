import PropTypes from 'prop-types';
import style from './transactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <div className={style.conteiner}>
      <table className={style.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(function (item) {
            return (
              <tr key={item.id}>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.object,
};

export default TransactionHistory;
