import React from 'react';
import { render, fireEvent, cleanup } from 'jest-preset-ui/testing';
import snapshot from 'jest-preset-ui/snapshot';
import DataTable from '../src';
import { shouldSupportClassName, shouldSupportRef } from 'jest-preset-ui/shared';

// const data = [
//   {
//     keyword: 'ebay buy',
//     kd: '77.8',
//     cpc: '$1.25',
//     vol: '32,500,000',
//   },
//   {
//     keyword: 'www.ebay.com',
//     kd: '11.2',
//     cpc: '$3.4',
//     vol: '65,457,920',
//   },
//   {
//     keyword: 'www.ebay.com',
//     kd: '10',
//     cpc: '$0.65',
//     vol: '47,354,640',
//   },
//   {
//     keyword: 'ebay buy',
//     kd: '-',
//     cpc: '$0',
//     vol: 'n/a',
//   },
//   {
//     keyword: 'ebay buy',
//     kd: '75.89',
//     cpc: '$0',
//     vol: '21,644,290',
//   },
// ];

describe('DataTable', () => {
  afterEach(cleanup);

  shouldSupportClassName(DataTable);
  shouldSupportRef(DataTable);

  // test('base render', async () => {
  //   const component = (
  //     <div style={{width: 600, height: 400}}>
  //       <DataTable data={data}>
  //         <DataTable.Head>
  //           <DataTable.Column name="keyword" title="Keyword" />
  //           <DataTable.Column name="kd" title="KD,%" />
  //           <DataTable.Column name="cpc" title="CPC" />
  //           <DataTable.Column name="vol" title="Vol." />
  //         </DataTable.Head>
  //         <DataTable.Body />
  //       </DataTable>
  //     </div>
  //   )
  //   expect(await snapshot(component)).toMatchImageSnapshot();
  // });
});
