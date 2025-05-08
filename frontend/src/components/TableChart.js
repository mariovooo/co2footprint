import { BarChart } from '@mui/x-charts/BarChart';

function TableChart(data,handleSelectionChange) {

    function transformJson(json) {
        const transform = json.reduce((acc, curr) => {
            Object.entries(curr).forEach(([key, value]) => {
                if (!acc[key]) acc[key] = [];
                acc[key].push(value);
            });
            return acc;
        }, {});
        return transform;
    }

    let selected = transformJson(data.data);

    if (data.handleSelectionChange.ids) {
        const selection = data.handleSelectionChange.ids;
        const filterselection = data.data.filter(item => selection.has(item.Name));
        selected = transformJson(filterselection)
    }

    return (
        <BarChart
        xAxis={[{ 
            data: selected.Name
        }]}
        yAxis={[{ 
            data: selected.Emissionen,
            colorMap: {
                type: 'continuous',
                min: 0,
                max: Math.max(...selected.Emissionen),
                color: ['orange', 'red']
              }
        }]}
        series={[{ data: selected.Emissionen }]}
        height={300}
    />
    )
}

export default TableChart;