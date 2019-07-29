import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemMockService implements InMemoryDbService {
  createDb() {
    const mailings = [{
      mailingId: 'NGSEA2018',
      mailingItemId: 'NGSEA2018',
      mailingEffectiveDate: '2018-01-01',
      mailingDate: '2018-03-05',
      actualMailingDate: '2018-03-05',
      mailingShortDescription: 'NGSEA',
      mailingDescription: 'NGSE-A 2018',
      resultFormAvailabilityCode: 'Y',
      fulfillmentGroupItemId: 'NGSEFG',
      fulfillmentGroupName: 'NGS Undiagnosed Disorders Exome',
      dueDaysInterval: 86,
      interimDueDaysInterval: 71
    },
      {
        mailingId: 'NGSBVA2018',
        mailingItemId: 'NGSBVA2018',
        mailingEffectiveDate: '2018-01-01',
        mailingDate: '2018-06-11',
        actualMailingDate: '2018-06-11',
        mailingShortDescription: 'NGSBVA',
        mailingDescription: 'NGSBV-A 2018',
        resultFormAvailabilityCode: 'Y',
        fulfillmentGroupItemId: 'NGSBVFG',
        fulfillmentGroupName: 'NGS Bioinformatics Somatic Val',
        dueDaysInterval: 0,
        interimDueDaysInterval: 0
      },
      {
        mailingId: 'NGSEB2018',
        mailingItemId: 'NGSEB2018',
        mailingEffectiveDate: '2018-01-01',
        mailingDate: '2018-09-17',
        actualMailingDate: '2018-09-17',
        mailingShortDescription: 'NGSEB',
        mailingDescription: 'NGSE-B 2018',
        resultFormAvailabilityCode: 'Y',
        fulfillmentGroupItemId: 'NGSEFG',
        fulfillmentGroupName: 'NGS Undiagnosed Disorders Exome',
        dueDaysInterval: 86,
        interimDueDaysInterval: 71
      },
      {
        mailingId: 'NGSBVB2018',
        mailingItemId: 'NGSBVB2018',
        mailingEffectiveDate: '2018-01-01',
        mailingDate: '2018-11-26',
        actualMailingDate: '2018-11-26',
        mailingShortDescription: 'NGSBVB',
        mailingDescription: 'NGSBV-B 2018',
        resultFormAvailabilityCode: 'Y',
        fulfillmentGroupItemId: 'NGSBVFG',
        fulfillmentGroupName: 'NGS Bioinformatics Somatic Val',
        dueDaysInterval: 0,
        interimDueDaysInterval: 33
      }
    ];

    const summary = [
      {
        kitId: '31594942',
        capNumber: '1026801',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594943',
        capNumber: '1068301',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594944',
        capNumber: '1441004',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594945',
        capNumber: '6672401',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594947',
        capNumber: '1191007',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594948',
        capNumber: '1319201',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594950',
        capNumber: '1882749',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594951',
        capNumber: '1974909',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594953',
        capNumber: '2442619',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594954',
        capNumber: '3710101',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594955',
        capNumber: '4096301',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594956',
        capNumber: '6817001',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'N',
        labStarterStatus: 'Lab Starter Steps Incomplete',
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594957',
        capNumber: '1783801',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'N',
        labStarterStatus: 'Lab Starter Steps Incomplete',
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594959',
        capNumber: '2038704',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594960',
        capNumber: '7181693',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594961',
        capNumber: '7185561',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594962',
        capNumber: '7198107',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'N',
        labStarterStatus: 'Lab Starter Steps Incomplete',
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594963',
        capNumber: '7205671',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594964',
        capNumber: '7233013',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594965',
        capNumber: '7538102',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-06-08 05:00:00',
        interimDueDate: '2018-03-29 05:00:00'
      },
      {
        kitId: '31594967',
        capNumber: '8030533',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594968',
        capNumber: '8042697',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594970',
        capNumber: '8056261',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-08-03 05:00:00',
        interimDueDate: '2018-05-24 05:00:00'
      },
      {
        kitId: '31594971',
        capNumber: '8737269',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594972',
        capNumber: '8756885',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594973',
        capNumber: '8762114',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594974',
        capNumber: '8770489',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594975',
        capNumber: '8991762',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594976',
        capNumber: '9047655',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'N',
        labStarterStatus: 'Lab Starter Steps Incomplete',
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594977',
        capNumber: '9051609',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594978',
        capNumber: '9277593',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594979',
        capNumber: '8671464',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594981',
        capNumber: '9412179',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-08-03 05:00:00',
        interimDueDate: '2018-05-24 05:00:00'
      },
      {
        kitId: '31594982',
        capNumber: '9412884',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-11-27 06:00:00',
        interimDueDate: '2018-09-17 05:00:00'
      },
      {
        kitId: '31594983',
        capNumber: '8249516',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'N',
        labStarterStatus: 'Lab Starter Steps Incomplete',
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594984',
        capNumber: '8280285',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594985',
        capNumber: '8229536',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594986',
        capNumber: '8282459',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'N',
        labStarterStatus: 'Lab Starter Steps Incomplete',
        kitDueDate: '2018-08-03 05:00:00',
        interimDueDate: '2018-05-24 05:00:00'
      },
      {
        kitId: '31594987',
        capNumber: '8291875',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594988',
        capNumber: '8298604',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31594989',
        capNumber: '8306872',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      },
      {
        kitId: '31606664',
        capNumber: '8162772',
        fulfillmentGroup: 'NGSEFG',
        kitStatusIndicator: 'R',
        labStarterStatus: null,
        kitDueDate: '2018-05-30 05:00:00',
        interimDueDate: '2018-03-20 05:00:00'
      }
    ];

    const metadata = [
      {
        validForUpload: false,
        version: 1,
        name: '1882749_19277_31594950_3of6.fastq',
        size: 467615282,
        received: '2019-02-08 17:17:03',
        uploadType: 'starter',
        labId: '1882749',
        kitId: '31594950',
        mailingId: '19277'
      },
      {
        validForUpload: false,
        version: 1,
        name: '6672401_19277_31594945_3of3.fastq',
        size: 426386718,
        received: '2019-02-08 18:30:34',
        uploadType: 'starter',
        labId: '6672401',
        kitId: '31594945',
        mailingId: '19277'
      },
      {
        validForUpload: false,
        version: 1,
        name: '1882749_19277_31594950_6of6.fastq',
        size: 313830658,
        received: '2019-02-08 17:34:06',
        uploadType: 'starter',
        labId: '1882749',
        kitId: '31594950',
        mailingId: '19277'
      },
      {
        validForUpload: false,
        version: 1,
        name: '6672401_19277_31594945_2of3.fastq',
        size: 365938248,
        received: '2019-02-08 18:28:26',
        uploadType: 'starter',
        labId: '6672401',
        kitId: '31594945',
        mailingId: '19277'
      },
      {
        validForUpload: false,
        version: 1,
        name: '1882749_19277_31594950_4of6.fastq',
        size: 7645661,
        received: '2019-02-08 17:19:52',
        uploadType: 'starter',
        labId: '1882749',
        kitId: '31594950',
        mailingId: '19277'
      },
      {
        validForUpload: false,
        version: 1,
        name: '1882749_19277_31594950_1of6.fastq',
        size: 47455365,
        received: '2019-02-08 17:14:43',
        uploadType: 'starter',
        labId: '1882749',
        kitId: '31594950',
        mailingId: '19277'
      },
      {
        validForUpload: false,
        version: 1,
        name: '1882749_19277_31594950_2of6.fastq',
        size: 347504626,
        received: '2019-02-08 17:14:59',
        uploadType: 'starter',
        labId: '1882749',
        kitId: '31594950',
        mailingId: '19277'
      },
      {
        validForUpload: false,
        version: 1,
        name: '1882749_19277_31594950_5of6.fastq',
        size: 321027930,
        received: '2019-02-08 17:36:27',
        uploadType: 'starter',
        labId: '1882749',
        kitId: '31594950',
        mailingId: '19277'
      },
      {
        validForUpload: false,
        version: 1,
        name: '6672401_19277_31594945_1of3.fastq',
        size: 110539669,
        received: '2019-02-08 18:27:46',
        uploadType: 'starter',
        labId: '6672401',
        kitId: '31594945',
        mailingId: '19277'
      }
    ];

    const mailingDetails = {
      mailingId: '19277',
      mailingItemId: 'NGSEA2018',
      legacyMailingId: 'NGSEA2018',
      mailingEffectiveDate: '2018-01-01',
      mailingDate: '2018-03-05',
      actualMailingDate: '2018-03-05',
      mailingShortDescription: 'NGSEA',
      mailingDescription: 'NGSE-A 2018',
      resultFormAvailabilityCode: 'Y',
      fulfillmentGroupItemId: 'NGSEFG',
      fulfillmentGroupName: 'NGS Undiagnosed Disorders Exome',
      dueDaysInterval: 86,
      interimDueDaysInterval: 71,
      kitStatuses: [
        {
          kitId: '31594982',
          mailingId: '19277',
          capNumber: '9412884',
          kitStatusIndicator: 'x',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: 13,
          kitHistory: [
            {
              relativePageNumber: '1',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-05-30 02:03:24'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-05-30 02:09:13'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:36:27'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:42:23'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:42:32'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:46:01'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:46:13'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:46:20'
            },
            {
              relativePageNumber: '8',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:47:25'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:47:40'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 08:53:24'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-05 09:08:21'
            },
            {
              relativePageNumber: '0',
              pageStatusCode: '2',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:13:21'
            },
            {
              relativePageNumber: '0',
              pageStatusCode: '3',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:14:03'
            },
            {
              relativePageNumber: '0',
              pageStatusCode: '4',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:14:08'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:14:28'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:14:39'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:14:45'
            },
            {
              relativePageNumber: '8',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:15:35'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:15:42'
            },
            {
              relativePageNumber: '1',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:39:02'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:39:31'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:39:48'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:39:57'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:40:13'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:40:19'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:40:24'
            },
            {
              relativePageNumber: '8',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:40:40'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-24 00:40:50'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-31 00:55:57'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-08-01 01:29:14'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 06:04:20'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 06:04:24'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 06:07:52'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 06:09:43'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 06:09:53'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 06:09:56'
            },
            {
              relativePageNumber: '8',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 06:09:59'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 06:10:04'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 07:47:50'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 07:48:59'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-07-04 09:03:31'
            }
          ]
        },
        {
          kitId: '31594942',
          mailingId: '19277',
          capNumber: '1026801',
          kitStatusIndicator: 'x',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:44'
            },
            {
              relativePageNumber: '1',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '8',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'amandachiaramonte',
              actionDate: '2018-05-28 12:30:45'
            },
            {
              relativePageNumber: '1',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 14:52:06'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 14:57:08'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 15:00:30'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 15:04:17'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 15:07:57'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 15:08:15'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 15:08:24'
            },
            {
              relativePageNumber: '8',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 15:09:49'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'CINTIAREYS',
              actionDate: '2018-04-27 15:11:18'
            }
          ]
        },
        {
          kitId: '31594943',
          mailingId: '19277',
          capNumber: '1068301',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativePageNumber: '1',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:34:00'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:37:41'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:37:53'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:38:04'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:38:12'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:38:22'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:38:32'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:41:17'
            },
            {
              relativePageNumber: '1',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:42:56'
            },
            {
              relativePageNumber: '0',
              pageStatusCode: '2',
              actionDescription: 'Kit Page Approved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:42:56'
            },
            {
              relativePageNumber: '0',
              pageStatusCode: '3',
              actionDescription: 'Kit Page Approved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:42:56'
            },
            {
              relativePageNumber: '0',
              pageStatusCode: '4',
              actionDescription: 'Kit Page Approved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:42:56'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:42:56'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:42:56'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:42:56'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'GENMOL',
              actionDate: '2018-05-24 16:42:56'
            }
          ]
        },
        {
          kitId: '31594944',
          mailingId: '19277',
          capNumber: '1441004',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativePageNumber: '1',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:13:29'
            },
            {
              relativePageNumber: '1',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:14:15'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:14:55'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:15:07'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:16:49'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:18:22'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:21:49'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:23:36'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:25:09'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:27:55'
            },
            {
              relativePageNumber: '9',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:29:08'
            },
            {
              relativePageNumber: '7',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:29:28'
            },
            {
              relativePageNumber: '6',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:29:33'
            },
            {
              relativePageNumber: '8',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 17:31:51'
            },
            {
              relativePageNumber: '1',
              pageStatusCode: 'S',
              actionDescription: 'Kit Page Saved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:12'
            },
            {
              relativePageNumber: '1',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            },
            {
              relativePageNumber: '2',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            },
            {
              relativePageNumber: '3',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            },
            {
              relativePageNumber: '4',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            },
            {
              relativePageNumber: '5',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDescription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MargaretTeasdale',
              actionDate: '2018-05-30 18:12:13'
            }
          ]
        },
        {
          kitId: '31594945',
          mailingId: '19277',
          capNumber: '6672401',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mbc0202',
              actionDate: '2018-05-28 01:20:54'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mbc0202',
              actionDate: '2018-05-28 01:20:56'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mbc0202',
              actionDate: '2018-05-28 01:21:34'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mbc0202',
              actionDate: '2018-05-28 01:21:45'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mbc0202',
              actionDate: '2018-05-28 01:21:45'
            }
          ]
        },
        {
          kitId: '31594947',
          mailingId: '19277',
          capNumber: '1191007',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:36:23'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:39:30'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:43:09'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:43:24'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:48:26'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:48:38'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:48:50'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:49:40'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 17:52:43'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 19:14:45'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 19:16:02'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 19:16:50'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 19:17:13'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 19:20:12'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 19:22:57'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-23 19:24:15'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:45:46'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:05'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dnadiagnosticslab',
              actionDate: '2018-05-24 14:46:06'
            }
          ]
        },
        {
          kitId: '31594948',
          mailingId: '19277',
          capNumber: '1319201',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 14:05:06'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 14:06:33'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 14:08:54'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 14:09:47'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 14:09:51'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 14:09:54'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 14:10:01'
            },
            {
              relativeePageNumber: '0',
              pageStatusCode: '2',
              actionDesription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:13:21'
            },
            {
              relativeePageNumber: '0',
              pageStatusCode: '3',
              actionDesription: 'Kit Page Saved',
              userId: 'Angsanadx2015',
              actionDate: '2018-06-06 02:14:03'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-30 17:33:08'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-30 17:35:44'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-30 17:36:41'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:01:10'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:02:13'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:02:22'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:02:32'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dulikm',
              actionDate: '2018-05-30 19:03:03'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 17:46:17'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 17:46:38'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:08:04'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:09:14'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:09:46'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:11:20'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:12:13'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:14:28'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:15:23'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:16:36'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:17:55'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:18:09'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-17 18:39:57'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-14 18:49:07'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-14 18:55:29'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-14 19:01:08'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-14 20:12:15'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Zhenming',
              actionDate: '2018-05-14 20:15:14'
            }
          ]
        },
        {
          kitId: '31594950',
          mailingId: '19277',
          capNumber: '1882749',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:39:17'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:40:55'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:41:05'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:41:10'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:41:19'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:41:22'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:41:26'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:41:48'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:42:06'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-29 18:56:48'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:10:07'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:16:17'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:19:34'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:24:37'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:31:31'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:43:28'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:45:28'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:45:56'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:47:37'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:58:08'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 20:58:14'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:06:17'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:17:53'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:18:59'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:19:50'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:19:51'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:19:52'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:19:53'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:20:18'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:20:22'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'karndt',
              actionDate: '2018-05-30 21:22:55'
            }
          ]
        },
        {
          kitId: '31594951',
          mailingId: '19277',
          capNumber: '1974909',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-29 22:00:52'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-29 22:01:19'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-30 13:01:54'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-30 13:02:33'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-30 13:31:05'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-30 13:31:38'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:15:59'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'dlpick',
              actionDate: '2018-05-30 23:17:40'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:35:36'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:35:42'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:38:49'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:38:52'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:40:46'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:41:09'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:41:28'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:42:29'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:42:46'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:43:55'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:44:19'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:45:39'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:46:00'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:46:04'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:46:09'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:47:16'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'dlpick',
              actionDate: '2018-05-25 21:48:04'
            }
          ]
        },
        {
          kitId: '31594953',
          mailingId: '19277',
          capNumber: '2442619',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 03:34:20'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 03:44:16'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 03:47:35'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 03:53:26'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 03:56:03'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:00:21'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:00:26'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:00:32'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:03:42'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:06'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:08'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:08'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:08'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:08'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:08'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:08'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:08'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:04:08'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:22:30'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:22:38'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mccabe',
              actionDate: '2018-05-31 04:22:40'
            }
          ]
        },
        {
          kitId: '31594954',
          mailingId: '19277',
          capNumber: '3710101',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-29 21:41:12'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-29 21:45:46'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-29 21:45:59'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-29 21:48:36'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-29 21:54:38'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-29 21:55:23'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'aleciawillis',
              actionDate: '2018-05-30 14:33:44'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'aleciawillis',
              actionDate: '2018-05-30 14:33:44'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'aleciawillis',
              actionDate: '2018-05-30 14:33:44'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'aleciawillis',
              actionDate: '2018-05-30 14:33:44'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'aleciawillis',
              actionDate: '2018-05-30 14:33:44'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'aleciawillis',
              actionDate: '2018-05-30 14:33:44'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-24 20:32:00'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-24 20:39:09'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-24 20:48:53'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-24 20:50:03'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-24 20:52:39'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-24 20:53:15'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'aleciawillis',
              actionDate: '2018-05-25 13:04:20'
            }
          ]
        },
        {
          kitId: '31594955',
          mailingId: '19277',
          capNumber: '4096301',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'SCOTT.PEW',
              actionDate: '2018-05-30 14:17:27'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'MDownton',
              actionDate: '2018-05-30 15:47:43'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:36:22'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:37:18'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:44:25'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:46:02'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:46:15'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:51:22'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:54:02'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:54:14'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:56:11'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:56:22'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:56:32'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:57:41'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jaraney',
              actionDate: '2018-05-25 19:58:26'
            }
          ]
        },
        {
          kitId: '31594956',
          mailingId: '19277',
          capNumber: '6817001',
          kitStatusIndicator: 'N',
          labStarterStatus: 'Lab Starter Steps Incomplete',
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: []
        },
        {
          kitId: '31594957',
          mailingId: '19277',
          capNumber: '1783801',
          kitStatusIndicator: 'N',
          labStarterStatus: 'Lab Starter Steps Incomplete',
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: []
        },
        {
          kitId: '31594959',
          mailingId: '19277',
          capNumber: '2038704',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-23 23:44:55'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-23 23:47:30'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-23 23:50:32'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-23 23:53:03'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-23 23:55:50'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-23 23:55:54'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-23 23:55:57'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-23 23:58:08'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 15:53:33'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 16:58:24'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 16:58:28'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 16:58:59'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:14'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:18'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:19'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:20'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:22'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:49'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:50'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:55'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'shiboli',
              actionDate: '2018-05-25 17:16:56'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:48:20'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:48:26'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:48:34'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:49:22'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:49:28'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:49:41'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:49:49'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:49:53'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:51:48'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 18:51:56'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 19:59:09'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 19:59:15'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 19:59:50'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 19:59:59'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:00:13'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:00:20'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:00:25'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:00:36'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:24'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'Shiboli',
              actionDate: '2018-05-25 20:01:35'
            }
          ]
        },
        {
          kitId: '31594960',
          mailingId: '19277',
          capNumber: '7181693',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:34:37'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:36:27'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:39:07'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:39:28'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:40:02'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:40:05'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:40:08'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:41:32'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:42:08'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:46:12'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:46:20'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:46:34'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-29 12:49:56'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 18:26:50'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 18:27:13'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:01:52'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:02:10'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:07:50'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:11:52'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:14:21'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:14:47'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:15:47'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:03'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:27'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'LoraBean',
              actionDate: '2018-05-29 20:17:28'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 20:51:50'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:00:19'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:00:32'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:00:39'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:00:46'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:00:53'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:01:00'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:02:08'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:03:37'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-25 21:11:47'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-25 21:17:57'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jsteige',
              actionDate: '2018-05-25 21:18:51'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:32:55'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'LoraBean',
              actionDate: '2018-05-25 21:33:21'
            }
          ]
        },
        {
          kitId: '31594961',
          mailingId: '19277',
          capNumber: '7185561',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 16:26:35'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 16:26:59'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 17:41:43'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 17:45:36'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 17:48:35'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 17:52:04'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 17:53:27'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 19:52:01'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 19:54:33'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:04:34'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:04:45'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:05:12'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:17:26'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:29:33'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:30:51'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:31:28'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:44:08'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:44:58'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jessica.kayhart',
              actionDate: '2018-05-02 20:45:56'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:20:53'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:30:14'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:42:02'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:47:19'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:49:31'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:50:05'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:50:25'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:50:46'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:52:17'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:53:07'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:15'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:37'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'weberj',
              actionDate: '2018-05-05 17:54:38'
            }
          ]
        },
        {
          kitId: '31594962',
          mailingId: '19277',
          capNumber: '7198107',
          kitStatusIndicator: 'N',
          labStarterStatus: 'Lab Starter Steps Incomplete',
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: []
        },
        {
          kitId: '31594963',
          mailingId: '19277',
          capNumber: '7205671',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:17:59'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:22:24'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:25:07'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:25:23'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:28:36'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:28:46'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:29:02'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:31:07'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:32:27'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:37:50'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-22 14:38:21'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:26:12'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'mdarjona',
              actionDate: '2018-05-23 11:28:12'
            }
          ]
        },
        {
          kitId: '31594964',
          mailingId: '19277',
          capNumber: '7233013',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:39:08'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:43:45'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:44:54'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:44:56'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:47:11'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:48:34'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:50:07'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:50:31'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 16:50:37'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:08:06'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:09:00'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:10:39'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:11:33'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:11:48'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:13:01'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:13:16'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:45:16'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:45:39'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:45:58'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:46:20'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:46:57'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:47:23'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:47:54'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:48:16'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 17:49:56'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 18:00:54'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 18:01:04'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 18:09:50'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 18:09:55'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 19:05:32'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 19:05:40'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NealALCody',
              actionDate: '2018-05-30 19:14:11'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:40:49'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:41:21'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:50:33'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:53:19'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:53:19'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:53:19'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:53:19'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:53:19'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:53:19'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'fundasuer',
              actionDate: '2018-05-30 21:53:19'
            }
          ]
        },
        {
          kitId: '31594965',
          mailingId: '19277',
          capNumber: '7538102',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-05-30 10:56:38'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-05-30 10:59:32'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-05-30 10:59:40'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-05-30 11:04:12'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 20:33:13'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 20:33:17'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 20:43:48'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 20:56:33'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 20:57:12'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:05:57'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:06:10'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:06:23'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:06:31'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:07:14'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:14:51'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:16:36'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:17:06'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:19:54'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:20:01'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:20:06'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:20:22'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:20:35'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:23:04'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:23:08'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:17'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'abdulali',
              actionDate: '2018-06-08 21:29:41'
            }
          ]
        },
        {
          kitId: '31594967',
          mailingId: '19277',
          capNumber: '8030533',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 02:45:32'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 02:53:03'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 02:53:59'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 02:54:05'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 02:58:00'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 02:58:07'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 02:58:12'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 03:07:50'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-15 03:08:10'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vpthailand',
              actionDate: '2018-05-25 08:07:17'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vpthailand@genetics.co.th',
              actionDate: '2018-05-25 08:07:20'
            }
          ]
        },
        {
          kitId: '31594968',
          mailingId: '19277',
          capNumber: '8042697',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-29 22:57:57'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 00:46:59'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 00:50:26'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 00:59:34'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:05:13'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:08:33'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:12:02'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:13:26'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:14:24'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:19:09'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:19:16'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:19:24'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:19:30'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:19:42'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'slau1114',
              actionDate: '2018-05-31 01:27:39'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-03-21 21:29:33'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-03-21 21:29:47'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'slau1114',
              actionDate: '2018-03-21 21:30:46'
            }
          ]
        },
        {
          kitId: '31594970',
          mailingId: '19277',
          capNumber: '8056261',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 05:50:08'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 05:53:12'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 05:55:39'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 05:55:46'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 05:57:04'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 05:57:10'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 05:57:16'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 06:08:12'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 06:08:30'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 06:23:29'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-20 08:06:23'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'MAOYANJUN',
              actionDate: '2018-07-20 09:51:45'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'MAOYANJUN',
              actionDate: '2018-07-20 09:52:46'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'meng.xin.cap',
              actionDate: '2018-07-21 00:30:08'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'sunlele@wuxi',
              actionDate: '2018-07-21 10:02:31'
            }
          ]
        },
        {
          kitId: '31594971',
          mailingId: '19277',
          capNumber: '8737269',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 17:08:55'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 17:13:55'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 17:16:20'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 17:19:51'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 17:22:12'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 17:23:09'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 17:52:30'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 17:54:20'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 20:33:21'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 21:00:17'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 21:01:32'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:03:19'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:15:04'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:15:48'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'amayak',
              actionDate: '2018-05-30 21:16:26'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:19:22'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:19:36'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:21:08'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:21:34'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:21:38'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:21:41'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:22:18'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 21:23:05'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:54:19'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:54:38'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:54:52'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:55:29'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:55:34'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:55:38'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:55:42'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:56:07'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-05-30 22:56:15'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'daveyj',
              actionDate: '2018-05-30 23:45:21'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-03-09 16:09:25'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-03-09 16:09:58'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'daveyj',
              actionDate: '2018-03-09 16:10:56'
            }
          ]
        },
        {
          kitId: '31594972',
          mailingId: '19277',
          capNumber: '8756885',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:10:20'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:18:50'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:22:16'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:29:02'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:30:34'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:30:47'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:31:11'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:37:02'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lmjohnstone',
              actionDate: '2018-05-21 16:38:03'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'uagccap',
              actionDate: '2018-05-21 20:20:10'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'uagccap',
              actionDate: '2018-05-21 20:24:25'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'hussam11',
              actionDate: '2018-05-21 21:56:00'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'hussam11',
              actionDate: '2018-05-21 21:56:09'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'hussam11',
              actionDate: '2018-05-21 21:57:37'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'hussam11',
              actionDate: '2018-05-21 22:09:50'
            }
          ]
        },
        {
          kitId: '31594973',
          mailingId: '19277',
          capNumber: '8762114',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-26 11:50:13'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-26 11:51:08'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:02'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:06'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:16'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:18'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:18'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:18'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:18'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:18'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:18'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'vj2004',
              actionDate: '2018-05-29 16:25:18'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 14:41:09'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 14:43:21'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 14:44:36'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 14:44:50'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 14:45:59'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 14:49:00'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 14:54:47'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 15:06:21'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 15:10:03'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 15:30:49'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 15:31:19'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'lkozon',
              actionDate: '2018-05-25 17:49:23'
            }
          ]
        },
        {
          kitId: '31594974',
          mailingId: '19277',
          capNumber: '8770489',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:13:32'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:14:50'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:15:15'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:15:23'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:15:53'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:16:08'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:16:14'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:16:20'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-26 17:16:30'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:12:24'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:17:51'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:26:33'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:32:10'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:35:47'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:35:53'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:35:58'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:37:15'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:47:13'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:18'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'garquero',
              actionDate: '2018-05-29 23:48:32'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:13:34'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:19:53'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:33:30'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:34:48'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:36:23'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:37:04'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:40:09'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:44:13'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:45:42'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:46:21'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:48:37'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:48:41'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:48:48'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 16:48:51'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'kouyang',
              actionDate: '2018-05-25 20:41:42'
            }
          ]
        },
        {
          kitId: '31594975',
          mailingId: '19277',
          capNumber: '8991762',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-28 02:40:36'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:09:13'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:09:57'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:10:07'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:12:38'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:13:06'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:15:46'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:19:25'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:21:03'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:23:41'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 01:44:47'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 02:08:34'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 02:09:07'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 02:10:04'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 02:10:13'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 03:01:17'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 03:01:17'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 03:01:17'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 03:01:17'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 03:01:17'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 03:01:17'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'gcgenome',
              actionDate: '2018-05-29 03:01:17'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-17 00:52:25'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-17 00:56:08'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-17 00:56:13'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-05-17 00:57:59'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-03-21 03:01:42'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'gcgenome',
              actionDate: '2018-03-21 03:03:19'
            }
          ]
        },
        {
          kitId: '31594976',
          mailingId: '19277',
          capNumber: '9047655',
          kitStatusIndicator: 'N',
          labStarterStatus: 'Lab Starter Steps Incomplete',
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: []
        },
        {
          kitId: '31594977',
          mailingId: '19277',
          capNumber: '9051609',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:06:35'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:09:50'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:11:32'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:11:38'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:13:16'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:13:23'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:13:28'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:14:17'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:15:23'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:18:49'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:19:59'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:22:18'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:22:23'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:24:15'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:24:19'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:24:23'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:24:51'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ritikac',
              actionDate: '2018-05-20 07:27:17'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 11:42:21'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 11:54:29'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 11:55:35'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 11:55:40'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 11:57:10'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 11:57:15'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 11:57:39'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 11:58:46'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:00:26'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'leenabaker',
              actionDate: '2018-05-23 12:01:46'
            }
          ]
        },
        {
          kitId: '31594978',
          mailingId: '19277',
          capNumber: '9277593',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-29 23:38:45'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-29 23:41:27'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-29 23:42:37'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:16:31'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:16:33'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:16:33'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:16:33'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:16:33'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:16:33'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:16:33'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:16:33'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:17:01'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:17:10'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:17:51'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:18:00'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:18:07'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:19:33'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:19:39'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:19:48'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:01'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:08'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:40'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:45'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:47'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:59'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:59'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:59'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:59'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:59'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:59'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:59'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'cinfong',
              actionDate: '2018-05-30 00:20:59'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:05:01'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:06:41'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:07:18'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:07:35'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:08:33'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:09:17'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:10:30'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:13:07'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-05-23 23:14:50'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-03-26 22:42:15'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-03-26 22:42:35'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'cinfong',
              actionDate: '2018-03-26 22:43:55'
            }
          ]
        },
        {
          kitId: '31594979',
          mailingId: '19277',
          capNumber: '8671464',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 17:54:13'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 17:56:13'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 17:58:13'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 17:58:31'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:00:28'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:00:34'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:00:37'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:01:15'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:01:39'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:08'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:50'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:53'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:55'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:02:55'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:34:03'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:34:13'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:34:25'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:34:30'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:34:35'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:34:39'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:34:47'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:34:59'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:35:18'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:04'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:18'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:31'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:35'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:43'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:49'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:52'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:58'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:40:59'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:42:02'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:42:09'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:42:50'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:42:54'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:10'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:14'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:22'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:31'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:34'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'jpkitajima',
              actionDate: '2018-05-24 18:43:35'
            }
          ]
        },
        {
          kitId: '31594981',
          mailingId: '19277',
          capNumber: '9412179',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 13:08:22'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 13:34:41'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 13:40:26'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 13:44:02'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 13:53:44'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 14:07:07'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 14:07:32'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 14:35:43'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 14:49:06'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 14:51:31'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 14:54:51'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 14:56:41'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:37:37'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:38:27'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:39:26'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:42:20'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:42:24'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:47:45'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:47:50'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:47:54'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:48:02'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:48:41'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-30 17:48:50'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: '0705338',
              actionDate: '2018-06-06 15:39:41'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:00'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: '0705338',
              actionDate: '2018-06-06 15:40:01'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-04-25 02:33:50'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-04-25 02:33:52'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-04-25 02:41:23'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-14 18:28:03'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'oblixion',
              actionDate: '2018-05-14 18:43:32'
            }
          ]
        },
        {
          kitId: '31594983',
          mailingId: '19277',
          capNumber: '8249516',
          kitStatusIndicator: 'N',
          labStarterStatus: 'Lab Starter Steps Incomplete',
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: []
        },
        {
          kitId: '31594984',
          mailingId: '19277',
          capNumber: '8280285',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-16 15:13:59'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-16 15:14:32'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-16 15:15:06'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-16 15:15:12'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-16 15:15:25'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-16 15:15:31'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-16 15:15:32'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-16 15:16:07'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-10 17:57:36'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-10 18:01:12'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-10 18:12:21'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'chungch',
              actionDate: '2018-05-10 18:14:24'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 15:17:29'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 15:18:09'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 15:19:16'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 15:19:22'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 15:19:59'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 15:20:03'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 15:20:06'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 15:20:26'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:09:23'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:09:26'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'harr.margaret',
              actionDate: '2018-05-22 16:14:17'
            }
          ]
        },
        {
          kitId: '31594985',
          mailingId: '19277',
          capNumber: '8229536',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 15:34:55'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 15:42:13'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 15:49:00'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 15:49:39'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 15:51:14'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:03:57'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:04:08'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:05:34'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:12:07'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:12:34'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:14:32'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:15:19'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:15:22'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:24:33'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:26:11'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:26:14'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:39:10'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:56:45'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 16:57:17'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:05:21'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:06:07'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:06:39'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:07:07'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:07:11'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:07:12'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:07:36'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:08:06'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:10:53'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:16'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'UCSFGML',
              actionDate: '2018-05-28 17:11:17'
            }
          ]
        },
        {
          kitId: '31594986',
          mailingId: '19277',
          capNumber: '8282459',
          kitStatusIndicator: 'N',
          labStarterStatus: 'Lab Starter Steps Incomplete',
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: []
        },
        {
          kitId: '31594987',
          mailingId: '19277',
          capNumber: '8291875',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 19:46:17'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 19:51:28'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 19:51:38'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 19:52:13'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 19:52:58'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:14:49'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:25:30'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:28:08'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:29:15'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:29:18'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:29:21'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:29:26'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:29:31'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:30:13'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 20:30:48'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-23 23:43:30'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:55:49'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:57:14'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:57:22'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:57:51'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:58:20'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:58:40'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:58:53'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:58:59'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 02:59:42'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 14:22:57'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 14:24:54'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 14:27:16'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 14:28:19'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 14:28:24'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 14:28:27'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 14:28:48'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:07:40'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:26:24'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:31:53'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:32:35'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:44:09'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:44:23'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:44:30'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'NAOMI.MEEKS',
              actionDate: '2018-05-25 15:50:34'
            }
          ]
        },
        {
          kitId: '31594988',
          mailingId: '19277',
          capNumber: '8298604',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-29 09:17:33'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-29 09:18:11'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-29 09:19:12'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-29 09:20:03'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-29 09:20:11'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-29 09:21:50'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-29 09:28:11'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-29 09:50:26'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-29 10:25:11'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-29 10:35:38'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-29 10:44:11'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-29 11:24:51'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-29 11:30:24'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:39:44'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:41:59'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:42:11'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:43:56'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:48:17'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:49:21'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:51:22'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:53:24'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 11:53:59'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:43:08'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:43:16'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:43:30'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:43:59'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:48:09'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:49:36'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:51:46'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:52:02'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 12:58:29'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:04:52'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:07:55'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'KarolinaKubos',
              actionDate: '2018-05-30 13:08:31'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-04-26 08:51:01'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-04-26 08:51:11'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:31:40'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:33:39'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:34:30'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:34:38'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:34:46'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:34:57'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:35:06'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:36:48'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'genetikateam',
              actionDate: '2018-05-20 10:36:56'
            }
          ]
        },
        {
          kitId: '31594989',
          mailingId: '19277',
          capNumber: '8306872',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-29 18:52:20'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-29 18:56:18'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 19:00:55'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 19:09:22'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 19:09:58'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 19:12:40'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 19:13:21'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 19:46:51'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:10:01'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:13:11'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:16:27'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:29:27'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:33:32'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:34:06'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:42:22'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:42:30'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:42:56'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:43:17'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:44:26'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:44:41'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:46:27'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:47:08'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 21:56:48'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 22:03:23'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 22:03:23'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 22:03:23'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 22:03:23'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 22:03:23'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 22:03:23'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'guanhuibao',
              actionDate: '2018-05-30 22:03:23'
            }
          ]
        },
        {
          kitId: '31606664',
          mailingId: '19277',
          capNumber: '8162772',
          kitStatusIndicator: 'R',
          labStarterStatus: null,
          preanalyticRequiredCount: 13,
          preanalyticSubmittedCount: null,
          kitHistory: [
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 20:09:07'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 20:25:37'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 20:47:52'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 20:47:56'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:07:43'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:13:35'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:34:46'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:34:50'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:34:52'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:34:54'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:37:27'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:37:35'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:43:00'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:44:01'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:44:05'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:44:09'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:44:13'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:44:17'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:46:28'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:48:17'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:57:03'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:57:07'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:57:10'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:57:12'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:57:13'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:57:14'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:57:15'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 21:57:17'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'A',
              actionDesription: 'Kit Page Approved',
              userId: 'ccottrell',
              actionDate: '2018-05-30 22:00:25'
            },
            {
              relativeePageNumber: '1',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:00:13'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:09:58'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:10:01'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:10:04'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:10:08'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:10:11'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:10:13'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:19:04'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:21:24'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-24 15:21:58'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 21:40:41'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 21:46:27'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 21:49:26'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 21:57:07'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 21:59:20'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 21:59:23'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:12:15'
            },
            {
              relativeePageNumber: '2',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:29:41'
            },
            {
              relativeePageNumber: '3',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:29:43'
            },
            {
              relativeePageNumber: '4',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:29:48'
            },
            {
              relativeePageNumber: '5',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:33:46'
            },
            {
              relativeePageNumber: '6',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:33:49'
            },
            {
              relativeePageNumber: '7',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:33:52'
            },
            {
              relativeePageNumber: '8',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:33:59'
            },
            {
              relativeePageNumber: '9',
              pageStatusCode: 'S',
              actionDesription: 'Kit Page Saved',
              userId: 'ccottrell',
              actionDate: '2018-05-25 22:34:44'
            }
          ]
        }
      ],
      pages: [
        {
          absolutePageNumber: 1,
          relativePageNumber: 1,
          trfSectionCode: 'PRE'
        },
        {
          absolutePageNumber: 2,
          relativePageNumber: 2,
          trfSectionCode: null
        },
        {
          absolutePageNumber: 3,
          relativePageNumber: 3,
          trfSectionCode: null
        },
        {
          absolutePageNumber: 4,
          relativePageNumber: 4,
          trfSectionCode: ''
        },
        {
          absolutePageNumber: 4,
          relativePageNumber: 4,
          trfSectionCode: null
        },
        {
          absolutePageNumber: 5,
          relativePageNumber: 5,
          trfSectionCode: null
        },
        {
          absolutePageNumber: 6,
          relativePageNumber: 6,
          trfSectionCode: null
        },
        {
          absolutePageNumber: 7,
          relativePageNumber: 7,
          trfSectionCode: null
        },
        {
          absolutePageNumber: 8,
          relativePageNumber: 8,
          trfSectionCode: null
        },
        {
          absolutePageNumber: 9,
          relativePageNumber: 9,
          trfSectionCode: 'UOO'
        }
      ]
    };

    return {
      // mailings,
      // summary,
      // mailingDetails,
      // metadata
    };
  }
}
