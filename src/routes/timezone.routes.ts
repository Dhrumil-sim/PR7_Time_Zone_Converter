import { Request, Response, Router } from 'express';
import { validateRequest } from 'middlewares/validateRequest/validateRequest';
import { timeZoneSchema } from 'middlewares/validateRequest/validateInput';
import { ApiResponse, asyncHandler } from 'utils';
import { convertTimeZone } from 'utils/convertTimeZone';
import { timeZones } from 'timeZones'; // Assuming your timeZones list is here
import { StatusCodes } from 'http-status-codes';

const router = Router();

// Render the EJS page
router.get(
  '/',
  asyncHandler(async (req: Request, res: Response) => {
    res.render('index', {
      timeZones, // Pass timeZones for dropdowns
      convertedTime: null, // Initially no converted time
    });
  }),
);

// Handle the form submission for time conversion
router.post(
  '/convert',
  validateRequest(timeZoneSchema), // Validate the input schema
  asyncHandler(async (req: Request, res: Response) => {
    const { currentTime, currentTimezone, convertToTimezone } = req.body;

    // Convert the time based on the input
    const convertedTime = convertTimeZone(
      currentTime,
      currentTimezone,
      convertToTimezone,
    );

    if (req.headers.accept?.includes('application/json')) {
      // If it's an API request
      return res
        .status(StatusCodes.OK)
        .json(
          new ApiResponse(
            StatusCodes.OK,
            convertedTime,
            'Timezone converted successfully',
          ),
        );
    }
    // Send the converted time back to the EJS page to be displayed
    res.render('index', {
      timeZones, // Pass timeZones again
      convertedTime, // Pass the converted time to be shown
    });
  }),
);

export default router;
