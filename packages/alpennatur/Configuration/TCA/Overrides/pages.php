<?php

defined('TYPO3') or die('Access denied.');

call_user_func(function()
{
    /**
     * Temporary variables
     */
    $extensionKey = 'alpennatur';

    /**
     * Default PageTS for Alpennatur
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::registerPageTSConfigFile(
        $extensionKey,
        'Configuration/TsConfig/Page/All.tsconfig',
        'alpennatur'
    );
});
