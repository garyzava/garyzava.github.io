/**
 * GA4 Security Tests
 * Tests for validating GA4 measurement ID format and preventing injection attacks
 */

import { describe, it, expect } from 'vitest';

// GA4 Measurement ID validation regex (same as in Layout.astro)
const isValidGAId = (id: string): boolean => /^G-[A-Z0-9]{10}$/.test(id);

describe('GA4 Measurement ID Validation', () => {

  // Test 1: Valid GA4 IDs should pass
  it('should accept valid GA4 measurement IDs', () => {
    expect(isValidGAId('G-0Q8QW8RZ0Y')).toBe(true);
    expect(isValidGAId('G-ABCDEFGHIJ')).toBe(true);
    expect(isValidGAId('G-1234567890')).toBe(true);
    expect(isValidGAId('G-A1B2C3D4E5')).toBe(true);
  });

  // Test 2: XSS/Injection attempts should be rejected
  it('should reject XSS and injection attempts in measurement ID', () => {
    // Script injection attempts
    expect(isValidGAId('G-"><script>alert(1)</script>')).toBe(false);
    expect(isValidGAId('<script>alert(1)</script>')).toBe(false);
    expect(isValidGAId('G-AAAA";alert(1)//')).toBe(false);

    // SQL injection patterns
    expect(isValidGAId("G-'; DROP TABLE--")).toBe(false);
    expect(isValidGAId('G-1 OR 1=1--')).toBe(false);

    // Template literal injection
    expect(isValidGAId('${process.env.SECRET}')).toBe(false);
    expect(isValidGAId('G-${alert(1)}')).toBe(false);

    // URL manipulation
    expect(isValidGAId('G-AAA&callback=evil')).toBe(false);
    expect(isValidGAId('javascript:alert(1)')).toBe(false);
  });

  // Test 3: Malformed IDs should be rejected
  it('should reject malformed GA4 measurement IDs', () => {
    // Wrong prefix
    expect(isValidGAId('UA-12345678-1')).toBe(false);  // Universal Analytics format
    expect(isValidGAId('GT-0Q8QW8RZ0Y')).toBe(false);  // Wrong prefix
    expect(isValidGAId('0Q8QW8RZ0Y')).toBe(false);     // Missing prefix

    // Wrong length
    expect(isValidGAId('G-ABC')).toBe(false);          // Too short
    expect(isValidGAId('G-ABCDEFGHIJKLMNOP')).toBe(false); // Too long
    expect(isValidGAId('G-')).toBe(false);             // Empty after prefix
    expect(isValidGAId('')).toBe(false);               // Empty string

    // Invalid characters
    expect(isValidGAId('G-abcdefghij')).toBe(false);   // Lowercase not allowed
    expect(isValidGAId('G-ABC DEF GH')).toBe(false);   // Spaces not allowed
    expect(isValidGAId('G-ABC_DEF_GH')).toBe(false);   // Underscores not allowed
    expect(isValidGAId('G-ABC-DEF-GH')).toBe(false);   // Extra hyphens not allowed

    // Null/undefined edge cases
    expect(isValidGAId(null as unknown as string)).toBe(false);
    expect(isValidGAId(undefined as unknown as string)).toBe(false);
  });
});
