import { defineEventHandler, readBody, createError } from 'h3';
import { supabase } from '~/server/utils/supabase';

export default defineEventHandler(async (event) => {
  const { serial } = await readBody(event);
  if (!serial) {
    throw createError({ statusCode: 400, message: 'Serial number is required' });
  }

  // ✅ Check if serial exists in Supabase
  const { data: serialRecord, error } = await supabase
    .from('serial_numbers')
    .select('*')
    .eq('serial_number', serial)
    .single();

  if (error || !serialRecord) {
    throw createError({ statusCode: 404, message: 'Invalid serial number' });
  }

  // ✅ Check if serial is already used
  if (serialRecord.used_by) {
    throw createError({ statusCode: 409, message: 'This serial number has already been used.' });
  }

  return { success: true, message: 'Serial number is valid. Proceed to account creation.' };
});
