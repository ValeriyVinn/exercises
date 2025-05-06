// import PropTypes from 'prop-types';
import css from './Transactions.module.css';

// import { Profiled } from './Profile.styled';


export const Transaction = ({ items }) => {
  return (
    <table className={css.transaction_history}>
      <thead className={css.header}>
        <tr>
          <th className={css.header_text}>Type</th>
          <th className={css.header_text}>Amount</th>
          <th className={css.header_text}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.table_string} key={id}>
              <td className={css.table_field}>{type}</td>
              <td className={css.table_field}>{amount}</td>
              <td className={css.table_field}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Transaction.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       type: PropTypes.string.isRequired,
//       amount: PropTypes.string.isRequired,
//       currency: PropTypes.string.isRequired,
//     })
//   ),
// };
