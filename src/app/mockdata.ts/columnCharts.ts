interface mData {budget: number, actual: number, percentage: number }
export interface myChart{
    name: string
    chartName: string,
    yAxisInfo: {
    min: number,
    max: number,
    title: {
        text: string
     },
    },
    title: {
        text: string
    },
    colorSelection: string[],
    data: mData[],
    aDDpercentageCalc: () => any[]
}

export interface MaturingObligation{
    productCategory: string,
    scriptDetail: string,
    counterParty: string,
    maturityDate: string,
    currency: string,
    totalVolumeFromPortfolio: number
}

export const PromissoryNotesInfo: myChart = {
    name: 'PromissoryNotesInfo',
    chartName: 'column',
    yAxisInfo: {
    min: 5000000,
    max: 350000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Promissory Notes'
    },
    colorSelection: ['#B7ADCF', '#4F646F'],
    data: [
        { budget: 200000000, actual: 150000000,  },
        {budget: 6493291, actual: 3639969},
        {budget: 9928345, actual: 4599034},
        {budget: 60928345, actual: 22657890},
        {budget: 75004000, actual: 45444782},
        {budget: 50450600, actual: 45996730},
        {budget: 11455000, actual: 7779006},
        {budget: 34600345, actual: 30107073},
        {budget: 16493295, actual: 11493291},
        {budget: 20455800, actual: 12550909},
        {budget: 220000000, actual: 132000000},
        {budget: 250000000, actual: 199000000}
    ] as mData[],
    aDDpercentageCalc: function () {
        const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
        return data;
     },
}



export const FGNBONDS: myChart = {
    name: 'FGNBONDS',
    chartName: 'column',
    yAxisInfo: {
    min: 2000000,
    max: 650000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for FGN BONDS'
    },
    colorSelection: ['#E8AEB7', '#82ABA1'],
    data: [
        { budget: 100000000, actual: 150000000,  },
        {budget: 289100370, actual: 256888361},
        {budget: 99888361, actual: 103100370},
        {budget: 210100370, actual: 122657890},
        {budget: 175004000, actual: 165444782},
        {budget: 250450600, actual: 285996730},
        {budget: 411455000, actual: 237779006},
        {budget: 334600345, actual: 130107073},
        {budget: 216493295, actual: 111493291},
        {budget: 420455800, actual: 452550909},
        {budget: 450460700, actual: 522500000},
        {budget: 468670900, actual: 452000000}
    ] as mData[],
    aDDpercentageCalc: function () {
        const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
        return data;
     },
}


export const stateBonds: myChart = {
    name: 'stateBonds',
    chartName: 'column',
    yAxisInfo: {
    min: 2500000,
    max: 50000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for State Bonds'
    },
    colorSelection: ['#59C3C3', '#52489C'],
    data: [
        { budget: 5000000, actual: 3000000,  },
        {budget: 16919730, actual: 6262819},
        {budget: 9662819, actual:  13100370},
        {budget: 4442819, actual:  2657890},
        {budget: 20662822, actual: 21001500},
        {budget: 25662822, actual: 18996730},
        {budget: 18772730, actual: 23779006},
        {budget: 33460345, actual: 26107073},
        {budget: 31649395, actual: 27493291},
        {budget: 42045800, actual: 28550909},
        {budget: 41400700, actual: 39500000},
        {budget: 46670900, actual: 42200000}
    ] as mData[],
    aDDpercentageCalc: function () {
        const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
        return data;
     },
}

export const corporateBonds:myChart =  {
    name: 'corporateBonds',
    chartName: 'column',
    yAxisInfo: {
    min: 2500000,
    max: 50000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Coperate Bonds'
    },
    colorSelection: ['#FE5F00', '#23231A'],
    data: [
        { budget: 30000000, actual: 12000000,  },
        {budget: 19937910, actual: 7370000},
        {budget: 15162819, actual:  17100370},
        {budget: 3442819, actual:  2657890},
        {budget: 22662822, actual: 15001500},
        {budget: 5662822, actual:  2896730},
        {budget: 9772730, actual:  3779006},
        {budget: 30460345, actual: 26107073},
        {budget: 31649395, actual: 27493291},
        {budget: 36045800, actual: 28550909},
        {budget: 39400700, actual: 34500000},
        {budget: 43670900, actual: 41200000}
    ] as mData[],
    aDDpercentageCalc: function () {
        const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
        return data;
     },
}


export const treasuryNotes: myChart =  {
    name: 'treasuryNotes',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Treasury Notes'
    },
    colorSelection: ['#D3BDB0', '#69385C'],
    data: [
        {budget: 900000000, actual: 1000000000,  },
        {budget: 362699261, actual: 245399008},
        {budget: 645359008, actual:  417100370},
        {budget: 517100370, actual:  510578900},
        {budget: 610572200, actual: 445001500},
        {budget: 600572200, actual:  332896730},
        {budget: 422772730, actual:  553779006},
        {budget: 753046345, actual: 444617073},
        {budget: 773164900, actual: 517493291},
        {budget: 790458500, actual: 590550909},
        {budget: 894007600, actual: 645100500},
        {budget: 864007600, actual: 412000000}
    ] as mData[],
    aDDpercentageCalc: function () {
        const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
        return data;
     },
}

export const euroBond = {
    name: 'euroBond',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Euro Bond'
    },
    colorSelection: ['#B8B8F3', '#F42272'],
    data: [
        {budget: 500000000, actual: 350000000,},
        {budget: 61639209, actual:  63729928},
        {budget: 430570800, actual:  390000000},
        {budget: 117100370, actual:  90578900},
        {budget: 176572200, actual: 145001500},
        {budget: 210572200, actual: 152896730},
        {budget: 272772730, actual: 253779006},
        {budget: 353046345, actual: 314617073},
        {budget: 473164900, actual: 417493291},
        {budget: 429458500, actual: 390550909},
        {budget: 384007600, actual: 245100500},
        {budget: 64007600, actual: 52000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}


export const testColumn: Highcharts.Options = {
   
    chart: {
        type: 'column'
    },
    title: {
        text: 'Efficiency Optimization by Branch'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
    },
    yAxis: {
        min: 0,
        max: 150,
        title: {
            text: 'Budget and Actual (Percentage)'
        }
    },
    legend: {
        shadow: false
    },
    tooltip: {
        shared: true
    },
    plotOptions: {
        column: {
            grouping: false,
            shadow: false, 
            borderWidth: 0,
            pointWidth: 20,
        }
    },
    series: [{
        name: 'Employees',
        color: 'rgba(165,170,217,1)',
        type: 'column',
        data: [150, 73, 20],
        pointPadding: 2,
        
        // pointPlacement: -0.2
    }, {
        name: 'Employees Optimized',
        color: '#7A6563',
        type: 'column',
        data: [140, 90, 40],
        pointPadding: 2,
        pointWidth: 20,
        
        // pointPlacement: -0.2
    }, ]
}


export const FixedIncomeData = {
    PromissoryNotesInfo,
    FGNBONDS,
    stateBonds,
    corporateBonds,
    treasuryNotes,
    euroBond
}


export const reverseFXSwaps = {
    name: 'reverseFXSwaps',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Reverse FX Swaps'
    },
    colorSelection: ['#B8B8F3', '#F42272'],
    data: [
        {budget: 750000000, actual: 237000000,},
        {budget: 237000088, actual: 112368668 },
        {budget: 412368668, actual: 390000000},
        {budget: 517100370, actual: 295578900},
        {budget: 356572200, actual: 395001500},
        {budget: 510572200, actual: 412896730},
        {budget: 467772730, actual: 443779006},
        {budget: 553006345, actual: 454617073},
        {budget: 773365900, actual: 571493291},
        {budget: 829458500, actual: 690550909},
        {budget: 884007600, actual: 705100500},
        {budget: 994007600, actual: 852000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}

export const Forwards = {
    name: 'Forwards',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Forwards'
    },
    colorSelection: ['black', 'yellow'],
    data: [
        {budget: 450000000, actual: 217000000,},
        {budget: 337000088, actual: 212368668 },
        {budget: 512368668, actual: 390000000},
        {budget: 617100370, actual: 495522200},
        {budget: 556572200, actual: 395001500},
        {budget: 530579900, actual: 412896730},
        {budget: 477775730, actual: 443779006},
        {budget: 693006345, actual: 454617073},
        {budget: 593365900, actual: 519493291},
        {budget: 629458500, actual: 590550909},
        {budget: 695000000, actual: 705100500},
        {budget: 994007600, actual: 752000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}


export const Spot  = {
    name: 'Spot',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Spots'
    },
    colorSelection: ['green', '#EBBAB9'],
    data: [
        {budget: 350000000, actual: 97000000,},
        {budget: 232000000, actual: 62619739 },
        {budget: 292000500, actual: 99000000 },
        {budget: 317100370, actual: 149522200},
        {budget: 356572200, actual: 175001500},
        {budget: 530579900, actual: 412896730},
        {budget: 477775000, actual: 443579000},
        {budget: 593006345, actual: 504617073},
        {budget: 593365900, actual: 519493291},
        {budget: 529458500, actual: 590550909},
        {budget: 695000000, actual: 705100500},
        {budget: 894007600, actual: 652000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}


export const NonDeliverableSwap = {
    name: 'NonDeliverableSwap',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Non- Deliverable Swap'
    },
    colorSelection: ['#DD7230', '#2E1F27'],
    data: [
        {budget: 600000000, actual: 487700000,},
        {budget: 715000000, actual:  512368668 },
        {budget: 292000500, actual: 99000000 },
        {budget: 317100370, actual: 149522200},
        {budget: 456572200, actual: 191001500},
        {budget: 530579900, actual: 412896730},
        {budget: 477775000, actual: 443579000},
        {budget: 593006345, actual: 504617073},
        {budget: 593365900, actual: 499493291},
        {budget: 529458500, actual: 550550909},
        {budget: 695000000, actual: 705100500},
        {budget: 894007600, actual: 652000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}


export const Commodities = {
    name: 'Commodities',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Commodities'
    },
    colorSelection: ['#A30015', '#B191FF'],
    data: [
        {budget: 600000000, actual: 287700000,},
        {budget: 411050000, actual:  222368000 },
        {budget: 392000500, actual: 101000000 },
        {budget: 317100370, actual: 99522200},
        {budget: 610572200, actual: 445001500},
        {budget: 600572200, actual:  332896730},
        {budget: 422772730, actual:  553779006},
        {budget: 753046345, actual: 444617073},
        {budget: 773164900, actual: 517493291},
        {budget: 790458500, actual: 590550909},
        {budget: 694007600, actual: 615100500},
        {budget: 864007600, actual: 614000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}


export const Futures = {
    name: 'Futures',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Futures'
    },
    colorSelection: ['#094D92', '#C3F73A'],
    data: [
        {budget: 850000000, actual: 833000000,  },
        {budget: 392699261, actual: 345399008},
        {budget: 645359008, actual:  417100370},
        {budget: 517100370, actual:  510578900},
        {budget: 610572200, actual: 445001500},
        {budget: 600572200, actual:  332896730},
        {budget: 422772730, actual:  553779006},
        {budget: 753046345, actual: 444617073},
       {budget: 773164900, actual: 517493291},
       {budget: 790458500, actual: 590550909},
        {budget: 894007600, actual: 645100500},
        {budget: 864007600, actual: 412000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}


export const ForwardRateAgreement = {
    name: 'ForwardRateAgreement',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Forward Rate Agreement'
    },
    colorSelection: ['#646E78', '#1F363D'],
    data: [
        {budget: 500000000, actual: 350000000,},
        {budget: 61639209, actual:  63729928},
        {budget: 430570800, actual:  390000000},
        {budget: 117100370, actual:  90578900},
        {budget: 176572200, actual: 145001500},
        {budget: 210572200, actual: 152896730},
        {budget: 272772730, actual: 253779006},
        {budget: 353046345, actual: 314617073},
        {budget: 473164900, actual: 417493291},
        {budget: 429458500, actual: 390550909},
        {budget: 384007600, actual: 245100500},
        {budget: 64007600, actual: 52000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}


export const InterestRateOption =  {
    name: 'InterestRateOption',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Interest Rate Option'
    },
    colorSelection: ['#CFE0C3', '#65AFFF'],
    data: [
        {budget: 500000000, actual: 350000000,},
        {budget: 261639209, actual:  93729928},
        {budget: 430570800, actual:  390000000},
         {budget: 422772730, actual:  553779006},
        {budget: 753046345, actual: 444617073},
        {budget: 773164900, actual: 517493291},
        {budget: 517100370, actual:  510578900},
        {budget: 610572200, actual: 445001500},
        {budget: 600572200, actual:  332896730},
        {budget: 242045800, actual: 128550909},
        {budget: 441400700, actual: 239500000},
        {budget: 746670900, actual: 442200000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}

export const ForexandDerivatives = {
    reverseFXSwaps,
    Forwards,
    Spot,
    NonDeliverableSwap,
    Commodities,
    Futures,
    ForwardRateAgreement,
    InterestRateOption
}

export const CallDeposit =  {
    name: 'CallDeposit',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Call Deposit'
    },
    colorSelection: ['#474747', '#7FEFBD'],
    data: [
        {budget: 456000000, actual: 236791980,},
        {budget: 289730000, actual: 109004320},
        {budget: 130570800, actual: 192005000},
         {budget:222772730, actual: 153779006},
        {budget: 753046345, actual: 444617073},
        {budget: 773164900, actual: 517493291},
        {budget: 450000000, actual: 217000000},
        {budget: 337000088, actual: 212368668},
        {budget: 512368668, actual: 390000000},
        {budget: 429458500, actual: 390550909},
        {budget: 384007600, actual: 245100500},
        {budget: 64007600, actual: 52000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },
   
}

export const InterbankPlacement = {
    name: 'InterbankPlacement',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Interbank Placement'
    },
    colorSelection: ['#5DD9C1', '#190933'],
    data: [
        {budget: 456000000, actual: 468013000,},
        {budget: 500730000, actual: 519004320},
        {budget: 550570800, actual: 532005000},
         {budget:720000000, actual: 573779006},
        {budget: 753046345, actual: 644617073},
        {budget: 673100900, actual: 677493291},
        {budget: 450000000, actual: 517000000},
        {budget: 837000088, actual: 599368668},
        {budget: 756000000, actual: 690000000},
        {budget: 890458500, actual: 869055090},
        {budget: 900000000, actual: 875100500},
        {budget: 950076000, actual: 925690768}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },  
}

export const InterbankTaking = {
    name: 'InterbankTaking',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Interbank Taking'
    },
    colorSelection:['#646E78', '#1F363D'],
    data: [
        {budget: 456000000, actual: 468013000,},
        {budget: 500730000, actual: 519004320},
        {budget: 550570800, actual: 532005000},
         {budget:720000000, actual: 573779006},
        {budget: 753046345, actual: 644617073},
        {budget: 573100900, actual: 577493291},
        {budget: 450000000, actual: 317000000},
        {budget: 637000088, actual: 599368668},
        {budget: 556000000, actual: 590000000},
        {budget: 490458500, actual: 369055090},
        {budget: 600000000, actual: 575100500},
        {budget: 750076000, actual: 625690768}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },  
}

export const  Repos = {
    name: 'Repos',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Repos'
    },
    colorSelection: ['#CFE0C3', '#65AFFF'],
    data: [
        { budget: 100000000, actual: 150000000,  },
        {budget: 289100370, actual: 256888361},
        {budget: 99888361, actual: 103100370},
        {budget: 210100370, actual: 122657890},
        {budget: 175004000, actual: 165444782},
        {budget: 250450600, actual: 285996730},
        {budget: 411455000, actual: 237779006},
        {budget: 334600345, actual: 130107073},
        {budget: 216493295, actual: 111493291},
        {budget: 420455800, actual: 452550909},
        {budget: 450460700, actual: 522500000},
        {budget: 468670900, actual: 452000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },  
}

export const CommercialPaper = {
    name: 'CommercialPaper',
    chartName: 'column',
    yAxisInfo: {
    min: 1000000,
    max: 100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Commercial Paper'
    },
    colorSelection: ['#CB48B7', '#E4E3D3'],
    data: [
        { budget: 5000000, actual: 3000000,  },
        {budget: 16919730, actual: 6262819},
        {budget: 9662819, actual:  13100370},
        {budget: 4442819, actual:  2657890},
        {budget: 20662822, actual: 21001500},
        {budget: 25662822, actual: 18996730},
        {budget: 18772730, actual: 23779006},
        {budget: 33460345, actual: 26107073},
        {budget: 31649395, actual: 27493291},
        {budget: 42045800, actual: 28550909},
        {budget: 41400700, actual: 39500000},
        {budget: 46670900, actual: 42200000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },  
}

export const BankerAcceptance = {
    name: 'BankerAcceptance',
    chartName: 'column',
    yAxisInfo: {
    min: 100000000,
    max: 1100000000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Monthly Volume for Banker Acceptance'
    },
    colorSelection: ['#E8AEB7', '#82ABA1'],
    data: [
        {budget: 900000000, actual: 1000000000,  },
        {budget: 362699261, actual: 245399008},
        {budget: 645359008, actual:  417100370},
        {budget: 517100370, actual:  510578900},
        {budget: 610572200, actual: 445001500},
        {budget: 600572200, actual:  332896730},
        {budget: 422772730, actual:  553779006},
        {budget: 753046345, actual: 444617073},
        {budget: 773164900, actual: 517493291},
        {budget: 790458500, actual: 590550909},
        {budget: 894007600, actual: 645100500},
        {budget: 864007600, actual: 412000000}
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },  
}

export const MoneyMarket = {
    CallDeposit,
    InterbankPlacement,
    InterbankTaking,
    Repos,
    CommercialPaper,
    BankerAcceptance
}


export const allFromMock = {
    FixedIncomeData,
    ForexandDerivatives,
    MoneyMarket 
} 


// Pie chart data for concentration ratio

export const concentrationRatioInfo = {
   totalBankingLiabilities: 500_000_000_000,
   totalTop15Customers:  160_000_000_000,
   liabilitesInPercentage:  null,
   top15CustomersInPercentage: null,
   calculatePercentages : function (){
      this.top15CustomersInPercentage = (this.totalTop15Customers / this.totalBankingLiabilities) * 100;
      this.liabilitesInPercentage = 100 - this.top15CustomersInPercentage;
   }
}

//  data for Maturing obligation
export const ArrOfMaturingObligations: Array<MaturingObligation> = [
    {productCategory: 'Interbank Takings', scriptDetail: 'OMO-26-12-22', counterParty: 'Providus Bank', maturityDate: '27-08-2021', currency: 'N', totalVolumeFromPortfolio: 200_000_000},
    {productCategory: 'Interest on Interbank Takings', scriptDetail: 'OMO-26-12-22', counterParty: 'Providus Bank', maturityDate: '27-08-2021', currency: 'N', totalVolumeFromPortfolio: 45_687.00},
    {productCategory: 'Interbank Takings', scriptDetail: 'OMO-26-12-22', counterParty: 'Zenith Bank', maturityDate: '29-08-2021', currency: 'N', totalVolumeFromPortfolio: 500_000_000},
    {productCategory: 'Interest on Interbank Takings', scriptDetail: 'OMO-26-12-22', counterParty: 'Zenith Bank', maturityDate: '29-08-2021', currency: 'N', totalVolumeFromPortfolio: 1_536_728.00},
    {productCategory: 'Interbank Takings', scriptDetail: 'NTB-29-08-21', counterParty: 'Stanbic IBTC', maturityDate: '29-08-2021', currency: '$', totalVolumeFromPortfolio: 100_000_000},
    {productCategory: 'Interest on Interbank Takings', scriptDetail: 'NTB-29-08-21', counterParty: 'Stanbic IBTC', maturityDate: '29-08-2021', currency: 'N', totalVolumeFromPortfolio: 327_912},
    {productCategory: 'Forwards', scriptDetail: '90 day forward', counterParty: 'Dangote Plc', maturityDate: '29-08-2021', currency: '$', totalVolumeFromPortfolio: 5_000_000},
    {productCategory: 'Options', scriptDetail: 'Call Option', counterParty: 'Flutterwave', maturityDate: '27-08-2021', currency: '$', totalVolumeFromPortfolio: 350_000},
    {productCategory: 'Bond', scriptDetail: 'S2021', counterParty: 'Federal Government', maturityDate: '30-08-2021', currency: 'N', totalVolumeFromPortfolio: 150_000_000},
    {productCategory: 'Repo', scriptDetail: 'OMO-26-12-22', counterParty: 'JP Morgan', maturityDate: '30-08-2021', currency: 'N', totalVolumeFromPortfolio: 300_000_000},
    {productCategory: 'Loan/Borrowing-SLF', scriptDetail: 'S2021', counterParty: 'Central Bank', maturityDate: '27-08-2021', currency: 'N', totalVolumeFromPortfolio: 125_000_000},
    {productCategory: 'Currency Swap', scriptDetail: 'USD/NGN', counterParty: 'JP Morgan', maturityDate: '20-08-2021', currency: '$', totalVolumeFromPortfolio: 21_700_099}
]

// data for funding gap
export const FundingGap = {
    '2021-08-16':  -146712334,
    '2021-08-17':  -44897310,
    '2021-08-19':  1621572560,
    '2021-08-20':  4180000000, 
    '2021-08-21' :  1000000000,
}



// data for yield on Assets
export const yieldOnAssets = {
    time: 2020,
    months:  [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],

    data: {
        actuals: {
            name: 'Actual',
            data: [1.00, 4.00, 4.80, 5.10, 6.00, 7.00, 5.00, 6.50, 7.00, 7.10, 7.30, 7.89]
        },
        average: {
            name: 'Average',
            data: [0.00, 3.00, 3.50, 4.00, 5.90, 6.80, 5.00, 5.00,6.00, 6.30, 6.89, 7.00]
        }
    }
}

// data for yield on Assets
export const costOfFunds = {
    time: 2020,
    months:  [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
    ],

    data: {
        actuals: {
            name: 'Actual',
            data: [  4,4.59,
                4.80,
                5.10,
                6.30,
                3.85,
                5.87,
                6.50,
                5.50,
                5, 5.12, 5.89]
        },
        average: {
            name: 'Average',
            data: [4.81,
                4.18,
                3.50,
                3.40,
                3.89,
                3.23,
                3.78,
                5.65,
                6.05,
                6.89,
                6.24,
                6.78]
        }
    }
}



// Totals for Variance Analysis Data
export const TotalFixedIncome = {
    name: 'TotalFixedIncome',
    chartName: 'column',
    yAxisInfo: {
        min: 0,
        max: 2000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Total Monthly Volume for Fixed Income',
    },
   
    colorSelection: ['orange', 'green'],
    data: [
        {budget: 1755.01, actual: 1655.19, },
        {budget: 603.55, actual: 377.87},
        {budget: 610.54, actual:  454.38},
        {budget: 448.95, actual:  332.66 },
        {budget: 862.46, actual: 759.66 },
        {budget: 795.12, actual:  679.69},
        {budget: 692.15, actual:  659.62},
        {budget: 758.91, actual: 729.65 },
        {budget: 1122.92, actual: 1109.62},
        {budget: 1203.06, actual: 1200.13},
        {budget: 1415.78, actual: 1375.45 },
        {budget: 1526.74, actual: 1466.70 }
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },  
}

export const TotalForexAndDerivatives = {
    name: 'TotalForexAndDerivatives',
    chartName: 'column',
    yAxisInfo: {
        min: 0,
        max: 2000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Total Monthly Volume for Total Forex and Derivatives',
    },
   
    colorSelection: ['#FF9999', '#660099'],
    data: [
        {budget: 1475.01, actual: 1210.19, },
        {budget: 673.55, actual: 507.87},
        {budget: 910.54, actual:  244.38},
        {budget: 548.95, actual:  372.66 },
        {budget: 862.46, actual: 759.66 },
        {budget: 795.12, actual:  679.69},
        {budget: 592.15, actual:  359.62},
        {budget: 898.91, actual: 729.65 },
        {budget: 1122.92, actual: 1109.62},
        {budget: 1203.06, actual: 1200.13},
        {budget: 1415.78, actual: 1375.45 },
        {budget: 1826.74, actual: 1166.70 }
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },  
}

export const TotalMoneyMarket = {
    name: 'TotalForexAndDerivatives',
    chartName: 'column',
    yAxisInfo: {
        min: 0,
        max: 5000,
    title: {
        text: 'Naira (Millions)'
     },
    },
    title: {
        text: 'Total Monthly Volume for Total Forex and Derivatives',
    },
   
    colorSelection: ['#006666', '#FFFF00'],
    data: [
        {budget: 2475.01, actual: 1810.19, },
        {budget: 3673.55, actual: 2507.87},
        {budget: 1910.54, actual:  1244.38},
        {budget: 2548.95, actual:  2372.66 },
        {budget: 862.46, actual: 759.66 },
        {budget: 795.12, actual:  679.69},
        {budget: 1592.15, actual:  959.62},
        {budget: 898.91, actual: 729.65 },
        {budget: 1122.92, actual: 1109.62},
        {budget: 2203.06, actual: 1200.13},
        {budget: 3415.78, actual: 2975.45 },
        {budget: 3926.74, actual: 3266.70 }
    ] as mData[],
    aDDpercentageCalc: function () {
       const data = (this.data as Array<{budget: number, actual: number, percentageCallback: () => number}>).map(elem => (elem.actual / elem.budget) * 100 );
       return data;
    },  
}



// Custom HighCharts.tooltip
 export const customTooltip = () => {
     return {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.2f} Million</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        formatter: function(){
            const strToDisplay = this.points.map((elem) => {
                const figureInString = new Intl.NumberFormat('en').format(elem.point.y/ 1000);
                return `
                <table>
                <tr>
                    <td style="color:{series.color};padding:0">${elem.series.name}: </td> 
                    <td style="padding:0"><b>${figureInString}  Billion</b></td>
               </tr>
                </table>
                 `
            }).join(' ')
            return strToDisplay;
        },
        useHTML: true
    }
 }