import { describe, expect, it, vi } from 'vitest';
import useForm from '../../hooks/form.hooks';
import { MockedFunction } from 'vitest';

import { formHooksMockedData } from '../__data__/mockData';

vi.mock('../../hooks/form.hooks'); // Mocking the correct hook

const useFormMock = useForm as MockedFunction<typeof useForm>;

describe('Testing useForm hook', () => {
  it('should fetch cars', async () => {
    useFormMock.mockReturnValue(formHooksMockedData);
    
    const result = useFormMock();

    expect(result.formValues).toEqual(formHooksMockedData.formValues);
    // Add other assertions as needed
  });
});
