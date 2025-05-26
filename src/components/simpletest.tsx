// TestComponent.tsx - Simple test
import { useGetProductsQuery } from "../Features/productApi";

function TestComponent() {
  const result = useGetProductsQuery();
  
  return (
    <div>
      <h2>API Test</h2>
      <p>Loading: {result.isLoading ? 'Yes' : 'No'}</p>
      <p>Error: {result.error ? 'Yes' : 'No'}</p>
      <p>Data: {result.data ? 'Received' : 'None'}</p>
      
      {result.error && (
        <details>
          <summary>Error Details</summary>
          <pre>{JSON.stringify(result.error, null, 2)}</pre>
        </details>
      )}
      
      {result.data && (
        <p>Products count: {result.data.products?.length || 0}</p>
      )}
    </div>
  );
}

export default TestComponent;