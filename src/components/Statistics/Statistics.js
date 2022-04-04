import {
  Card,
  Title,
  StatisticsList,
  Item,
  Label,
  Percentage,
} from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';
import getRandomColor from './getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <Card>
      <div>{title && <Title>{title}</Title>}</div>

      <StatisticsList>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} style={{ backgroundColor: getRandomColor() }}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatisticsList>
    </Card>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default Statistics;
