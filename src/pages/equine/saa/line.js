import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import data from './data';

// make sure parent container have a defined height when using responsive component,
// otherwise height will be 0 and no chart will be rendered.
// website examples showcase many properties, you'll often use just a few of them.
const Line = () => (
        <ResponsiveLine
            data={data}
            margin={{ top: 10, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: 'linear' }}
            yScale={{ type: 'linear', stacked: false, min: 0, max: 500 }}
            curve="cardinal"
            axisLeft={{
                orient: 'left',
                tickValues: [50, 100, 150, 200, 250, 300],
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'ug/mL',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            axisRight={{
                orient: 'left',
                tickValues:  [50, 100, 150, 200, 250, 300],
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'mg/dL',
                legendOffset: 40,
                legendPosition: 'middle'
            }}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'days',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            pointSize={10}
            lineWidth={13}
            enableArea={true}
            areaBlendMode="soft-light"
            areaBaselineValue={200}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            colors={{ scheme: 'set1' }}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: -340,
                    translateY: -280,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
);

export default Line;