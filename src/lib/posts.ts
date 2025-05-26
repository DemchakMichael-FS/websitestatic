export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  image?: string
  tags: string[]
}

// In a real application, this would come from a CMS, markdown files, or database
const posts: Post[] = [
  {
    slug: 'react-api-best-practices',
    title: 'Best Practices for Using APIs in React Applications',
    date: 'May 18, 2025',
    excerpt: 'Discover essential patterns and techniques for efficiently integrating APIs into your React applications while maintaining clean, maintainable code.',
    image: '/images/react-api.svg',
    tags: ['React', 'API', 'Frontend', 'Best Practices'],
    content: `
# Best Practices for Using APIs in React Applications

![React API Integration](/images/react-api.svg)

Working with APIs is a fundamental part of modern React development. Whether you're fetching user data, submitting forms, or synchronizing with external services, how you handle API interactions can significantly impact your application's performance, user experience, and maintainability.

## Understanding the Basics

APIs (Application Programming Interfaces) serve as the bridge between your React frontend and backend services. They allow your application to request data, send updates, and communicate with external systems. However, integrating APIs effectively requires more than just making HTTP requests.

## Key Principles for API Integration

### 1. Centralize Your API Logic

Instead of scattering API calls throughout your components, create a dedicated service layer. This approach makes your code more organized, testable, and easier to maintain. Consider creating an API service file that handles all your HTTP requests in one place.

### 2. Handle Loading States Gracefully

Users should always know when something is happening. Implement proper loading indicators for API calls to provide visual feedback. This improves the perceived performance of your application and keeps users informed about ongoing operations.

### 3. Implement Robust Error Handling

Network requests can fail for various reasons - poor connectivity, server errors, or invalid data. Always plan for these scenarios by implementing comprehensive error handling that provides meaningful feedback to users.

### 4. Use Proper State Management

Managing API data in React requires careful consideration of state. Decide whether to use local component state, context, or external state management libraries based on your application's complexity and data sharing needs.

## Data Fetching Strategies

### Choose the Right Timing

Consider when to fetch data in your application lifecycle. Some data should be loaded immediately when a component mounts, while other data might be better fetched on user interaction or when specific conditions are met.

### Implement Caching Wisely

Avoid unnecessary API calls by implementing intelligent caching strategies. This reduces server load, improves performance, and provides a better user experience, especially for data that doesn't change frequently.

### Handle Race Conditions

When users can trigger multiple API calls quickly, ensure your application handles race conditions properly. The last request should take precedence, and outdated responses should be ignored.

## Performance Considerations

### Optimize Network Requests

Minimize the number of API calls by batching requests when possible. Consider implementing pagination for large datasets and only fetch the data you actually need.

### Implement Proper Cleanup

Always clean up ongoing API requests when components unmount to prevent memory leaks and unnecessary network activity. This is especially important for long-running requests or subscriptions.

### Use Debouncing for User Input

When implementing search functionality or real-time validation, use debouncing techniques to avoid overwhelming your API with too many requests as users type.

## Security Best Practices

### Validate Data on Both Ends

Never trust data from external sources. Always validate API responses before using them in your application, and ensure your backend validates incoming requests.

### Handle Authentication Properly

Implement secure authentication patterns, including proper token storage, automatic token refresh, and graceful handling of authentication failures.

### Protect Sensitive Information

Be mindful of what data you expose in your frontend code. API keys and sensitive configuration should never be hardcoded in client-side code.

## User Experience Enhancements

### Provide Meaningful Feedback

Keep users informed about the status of their actions. Show success messages for completed operations and clear error messages when something goes wrong.

### Implement Optimistic Updates

For better perceived performance, consider implementing optimistic updates where the UI reflects changes immediately, then reconciles with the server response.

### Handle Offline Scenarios

Consider how your application behaves when users lose internet connectivity. Implement appropriate fallbacks and inform users about offline status.

## Testing Your API Integration

### Mock API Responses

Create mock data for testing to ensure your components handle various API response scenarios correctly, including success, error, and edge cases.

### Test Error Scenarios

Don't just test the happy path. Ensure your application gracefully handles network failures, timeout errors, and unexpected response formats.

### Validate Performance

Monitor your API integration performance, including request timing, payload sizes, and the impact on your application's overall performance.

## Common Pitfalls to Avoid

### Over-fetching Data

Avoid requesting more data than necessary. This wastes bandwidth and can slow down your application, especially on mobile devices with limited connectivity.

### Ignoring HTTP Status Codes

Different HTTP status codes convey important information about the request outcome. Handle various status codes appropriately rather than treating all responses the same way.

### Blocking the UI

Never let API calls block your user interface. Always implement asynchronous patterns that keep your application responsive during network operations.

## Conclusion

Effective API integration in React applications requires thoughtful planning and implementation. By following these best practices, you'll create more robust, performant, and user-friendly applications.

Remember that API integration is not just about making requests and handling responses - it's about creating a seamless experience for your users while maintaining clean, maintainable code for your development team.

The key is to start with these fundamentals and gradually implement more advanced patterns as your application grows in complexity. Focus on user experience, error handling, and performance from the beginning, and your React applications will be well-positioned for success.
    `
  },
  {
    slug: 'securing-apis-best-practices',
    title: 'Securing APIs: Essential Best Practices for Modern Web Development',
    date: 'May 15, 2025',
    excerpt: 'Learn the fundamental security practices every developer should implement when building and maintaining APIs in production environments.',
    image: '/images/api-security.svg',
    tags: ['API', 'Security', 'Web Development', 'Best Practices'],
    content: `
# Securing APIs: Essential Best Practices for Modern Web Development

![API Security Illustration](/images/api-security.svg)

In today's interconnected digital landscape, APIs (Application Programming Interfaces) serve as the backbone of modern web applications. They enable seamless communication between different services, mobile apps, and third-party integrations. However, with great connectivity comes great responsibility – securing these APIs is crucial to protecting sensitive data and maintaining user trust.

## Why API Security Matters

APIs are often the most vulnerable entry points in modern applications. Unlike traditional web applications that primarily serve HTML to browsers, APIs expose data and functionality directly, making them attractive targets for malicious actors. A single compromised API endpoint can lead to:

- **Data breaches** exposing sensitive user information
- **Unauthorized access** to internal systems
- **Service disruption** affecting business operations
- **Financial losses** and regulatory penalties

## Essential Security Practices

### 1. Authentication and Authorization

**Always implement robust authentication mechanisms:**

- Use industry-standard protocols like OAuth 2.0 or JWT (JSON Web Tokens)
- Implement multi-factor authentication (MFA) for sensitive operations
- Never rely on client-side validation alone

\`\`\`javascript
// Example: JWT token validation middleware
const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}
\`\`\`

### 2. Input Validation and Sanitization

**Validate all incoming data rigorously:**

- Implement server-side validation for all inputs
- Use parameterized queries to prevent SQL injection
- Sanitize data to prevent XSS attacks
- Set appropriate data type and length restrictions

### 3. Rate Limiting and Throttling

**Protect against abuse and DoS attacks:**

- Implement rate limiting per user/IP address
- Use progressive delays for repeated failed attempts
- Monitor and alert on unusual traffic patterns

\`\`\`javascript
// Example: Express rate limiting
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP'
});

app.use('/api/', limiter);
\`\`\`

### 4. HTTPS and Encryption

**Secure data in transit:**

- Always use HTTPS for API communications
- Implement proper SSL/TLS certificate management
- Use strong encryption algorithms
- Consider end-to-end encryption for highly sensitive data

### 5. API Versioning and Documentation

**Maintain security through proper versioning:**

- Implement clear API versioning strategies
- Deprecate old, potentially vulnerable versions
- Maintain comprehensive, up-to-date documentation
- Use tools like OpenAPI/Swagger for standardized documentation

## Advanced Security Measures

### API Gateways

Implement an API gateway to centralize security policies:

- **Centralized authentication** and authorization
- **Request/response transformation** and validation
- **Monitoring and analytics** capabilities
- **Load balancing** and caching

### Security Headers

Configure appropriate HTTP security headers:

\`\`\`javascript
// Essential security headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000');
  next();
});
\`\`\`

### Logging and Monitoring

Implement comprehensive logging:

- Log all API requests and responses
- Monitor for suspicious patterns
- Set up alerts for security events
- Regularly review and analyze logs

## Testing Your API Security

### Automated Security Testing

- Integrate security testing into your CI/CD pipeline
- Use tools like OWASP ZAP or Burp Suite
- Implement static code analysis
- Conduct regular penetration testing

### Security Audits

- Perform regular security audits
- Engage third-party security experts
- Stay updated with security advisories
- Participate in bug bounty programs

## Conclusion

API security is not a one-time implementation but an ongoing process that requires constant attention and updates. By following these best practices and staying informed about emerging threats, you can significantly reduce the risk of security breaches and build more trustworthy applications.

Remember: security is only as strong as its weakest link. Implement these practices consistently across all your APIs, and regularly review and update your security measures as your application evolves.

## Key Takeaways

- **Never trust client-side validation** – always validate on the server
- **Implement defense in depth** – use multiple layers of security
- **Monitor continuously** – security is an ongoing process
- **Stay updated** – keep dependencies and security practices current
- **Test regularly** – automated and manual security testing are essential

By prioritizing API security from the beginning of your development process, you'll build more robust, trustworthy applications that protect both your users and your business.
    `
  }
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter(post => post.tags.includes(tag))
}
