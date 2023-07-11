module.exports = {
  /** resolves from test to snapshot path */
  resolveSnapshotPath: (t, s) => t.replace('src/', 'src/__tests__/__snapshots__/') + s,

  /** resolves from snapshot to test path */
  resolveTestPath: (snapshotFilePath, snapshotExtension) => snapshotFilePath
    .replace('__snapshots__/', 'src/')
    .slice(0, -snapshotExtension.length),
  testPathForConsistencyCheck: 'some-test.js'
}
