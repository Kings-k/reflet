<?php

namespace App\Templating\Helper;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

/**
 * Exposes some Symfony parameters and services as an "app" global variable.
 */
class AppVariable
{
    private $tokenStorage;
    private $requestStack;
    private $environment;
    private $debug;

    public function setTokenStorage(TokenStorageInterface $tokenStorage)
    {
        $this->tokenStorage = $tokenStorage;
    }

    public function setRequestStack(RequestStack $requestStack)
    {
        $this->requestStack = $requestStack;
    }

    public function setEnvironment(string $environment)
    {
        $this->environment = $environment;
    }

    public function setDebug(bool $debug)
    {
        $this->debug = $debug;
    }

    /**
     * Returns the current token.
     *
     * @return TokenInterface|null
     *
     * @throws \RuntimeException When the TokenStorage is not available
     */
    public function getToken()
    {
        if (null === $tokenStorage = $this->tokenStorage) {
            throw new \RuntimeException('The "app.token" variable is not available.');
        }

        return $tokenStorage->getToken();
    }

    /**
     * Returns the current user.
     *
     * @return object|null
     *
     * @see TokenInterface::getUser()
     */
    public function getUser()
    {
        if (null === $tokenStorage = $this->tokenStorage) {
            throw new \RuntimeException('The "app.user" variable is not available.');
        }

        if (!$token = $tokenStorage->getToken()) {
            return null;
        }

        $user = $token->getUser();

        return \is_object($user) ? $user : null;
    }

    /**
     * Returns the current request.
     *
     * @return Request|null The HTTP request object
     */
    public function getRequest()
    {
        // if (null === $this->requestStack) {
        //     throw new \RuntimeException('The "app.request" variable is not available.');
        // }

        return $this->requestStack->getCurrentRequest();
    }

    /**
     * Returns the current session.
     *
     * @return Session|null The session
     */
    public function getSession()
    {
        // if (null === $this->requestStack) {
        //     throw new \RuntimeException('The "app.session" variable is not available.');
        // }
        $request = $this->getRequest();

        return $request && $request->hasSession() ? $request->getSession() : null;
    }

    /**
     * Returns the current app environment.
     *
     * @return string The current environment string (e.g 'dev')
     */
    public function getEnvironment()
    {
        if (null === $this->environment) {
            throw new \RuntimeException('The "app.environment" variable is not available.');
        }

        return $this->environment;
    }

    /**
     * Returns the current app debug mode.
     *
     * @return bool The current debug mode
     */
    public function getDebug()
    {
        if (null === $this->debug) {
            throw new \RuntimeException('The "app.debug" variable is not available.');
        }

        return $this->debug;
    }

    /**
     * Returns some or all the existing flash messages:
     *  * getFlashes() returns all the flash messages
     *  * getFlashes('notice') returns a simple array with flash messages of that type
     *  * getFlashes(['notice', 'error']) returns a nested array of type => messages.
     *
     * @return array
     */
    public function getFlashes($types = null)
    {
        try {
            if (null === $session = $this->getSession()) {
                return [];
            }
        } catch (\RuntimeException $e) {
            return [];
        }

        if (null === $types || '' === $types || [] === $types) {
            return $session->getFlashBag()->all();
        }

        if (\is_string($types)) {
            return $session->getFlashBag()->get($types);
        }

        $result = [];
        foreach ($types as $type) {
            $result[$type] = $session->getFlashBag()->get($type);
        }

        return $result;
    }
}
