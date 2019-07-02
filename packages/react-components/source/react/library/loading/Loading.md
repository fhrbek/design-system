The loading component provides a general purpose spinner. It will automatically center itself within its containing element.

```jsx
<table className="rc-loading-table">
  <thead>
    <tr>
      <th>Large (default)</th>
      <th>Small</th>
      <th>Tiny</th>
      <th>Custom</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <Loading size="large" />
      </td>
      <td>
        <Loading size="small" />
      </td>
      <td>
        <Loading size="tiny" />
      </td>
      <td>
        <Loading style={{ height: 16, width: 16 }} />
      </td>
    </tr>
  </tbody>
</table>
```