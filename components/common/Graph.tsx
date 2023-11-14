import React from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

interface GraphProps {
  data: {
    labels: string[];
    datasets: [
      {
        data: number[];
      }
    ];
  };
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  return (
    <LineChart
      data={data}
      width={Dimensions.get('window').width - 20}
      height={220}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      bezier
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default Graph;
